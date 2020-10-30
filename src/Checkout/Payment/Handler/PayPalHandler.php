<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Swag\PayPal\Checkout\Payment\Handler;

use Psr\Log\LoggerInterface;
use Shopware\Core\Checkout\Customer\CustomerEntity;
use Shopware\Core\Checkout\Order\Aggregate\OrderTransaction\OrderTransactionStateHandler;
use Shopware\Core\Checkout\Payment\Cart\AsyncPaymentTransactionStruct;
use Shopware\Core\Checkout\Payment\Exception\AsyncPaymentFinalizeException;
use Shopware\Core\Checkout\Payment\Exception\AsyncPaymentProcessException;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Swag\PayPal\OrdersApi\Builder\OrderFromOrderBuilder;
use Swag\PayPal\OrdersApi\Patch\OrderNumberPatchBuilder;
use Swag\PayPal\RestApi\Exception\PayPalApiException;
use Swag\PayPal\RestApi\PartnerAttributionId;
use Swag\PayPal\RestApi\V2\Api\Order\ApplicationContext;
use Swag\PayPal\RestApi\V2\Api\Order as PayPalOrder;
use Swag\PayPal\RestApi\V2\PaymentIntentV2;
use Swag\PayPal\RestApi\V2\PaymentStatusV2;
use Swag\PayPal\RestApi\V2\Resource\OrderResource;
use Swag\PayPal\Setting\Service\SettingsServiceInterface;

class PayPalHandler extends AbstractPaymentHandler
{
    /**
     * @var OrderFromOrderBuilder
     */
    private $orderBuilder;

    /**
     * @var OrderResource
     */
    private $orderResource;

    /**
     * @var OrderTransactionStateHandler
     */
    private $orderTransactionStateHandler;

    /**
     * @var SettingsServiceInterface
     */
    private $settingsService;

    /**
     * @var OrderNumberPatchBuilder
     */
    private $orderNumberPatchBuilder;

    /**
     * @var LoggerInterface
     */
    private $logger;

    public function __construct(
        EntityRepositoryInterface $orderTransactionRepo,
        OrderFromOrderBuilder $orderBuilder,
        OrderResource $orderResource,
        OrderTransactionStateHandler $orderTransactionStateHandler,
        SettingsServiceInterface $settingsService,
        OrderNumberPatchBuilder $orderNumberPatchBuilder,
        LoggerInterface $logger
    ) {
        parent::__construct($orderTransactionRepo);
        $this->orderBuilder = $orderBuilder;
        $this->orderResource = $orderResource;
        $this->orderTransactionStateHandler = $orderTransactionStateHandler;
        $this->settingsService = $settingsService;
        $this->orderNumberPatchBuilder = $orderNumberPatchBuilder;
        $this->logger = $logger;
    }

    /**
     * @throws AsyncPaymentProcessException
     */
    public function handlePayPalOrder(
        AsyncPaymentTransactionStruct $transaction,
        SalesChannelContext $salesChannelContext,
        CustomerEntity $customer
    ): PayPalOrder {
        $salesChannelId = $salesChannelContext->getSalesChannel()->getId();
        $orderTransactionId = $transaction->getOrderTransaction()->getId();

        $paypalOrder = $this->orderBuilder->getOrder(
            $transaction,
            $salesChannelContext,
            $customer
        );
        $paypalOrder->getApplicationContext()->setUserAction(ApplicationContext::USER_ACTION_PAY_NOW);

        try {
            $paypalOrderResponse = $this->orderResource->create(
                $paypalOrder,
                $salesChannelId,
                PartnerAttributionId::PAYPAL_CLASSIC
            );
        } catch (\Exception $e) {
            throw new AsyncPaymentProcessException(
                $orderTransactionId,
                \sprintf('An error occurred during the communication with PayPal%s%s', PHP_EOL, $e->getMessage())
            );
        }

        $this->addPayPalOrderId(
            $orderTransactionId,
            $paypalOrderResponse->getId(),
            PartnerAttributionId::PAYPAL_CLASSIC,
            $salesChannelContext->getContext()
        );

        return $paypalOrderResponse;
    }

    /**
     * @throws AsyncPaymentFinalizeException
     */
    public function handleFinalizeOrder(
        AsyncPaymentTransactionStruct $transaction,
        string $paypalOrderId,
        string $salesChannelId,
        Context $context,
        string $partnerAttributionId,
        bool $orderNumberSendNeeded
    ): void {
        $transactionId = $transaction->getOrderTransaction()->getId();
        $settings = $this->settingsService->getSettings($salesChannelId);
        $orderNumber = $transaction->getOrder()->getOrderNumber();

        if ($orderNumberSendNeeded && $orderNumber !== null && $settings->getSendOrderNumber()) {
            $orderNumberPrefix = (string) $settings->getOrderNumberPrefix();
            $orderNumber = $orderNumberPrefix . $orderNumber;

            try {
                $this->orderResource->update(
                    [$this->orderNumberPatchBuilder->createOrderNumberPatch($orderNumber)],
                    $paypalOrderId,
                    $salesChannelId,
                    $partnerAttributionId
                );
            } catch (\Exception $e) {
                throw new AsyncPaymentFinalizeException(
                    $transactionId,
                    \sprintf('An error occurred during the communication with PayPal%s%s', PHP_EOL, $e->getMessage())
                );
            }
        }

        $paypalOrder = $this->orderResource->get($paypalOrderId, $salesChannelId);

        try {
            if ($paypalOrder->getIntent() === PaymentIntentV2::CAPTURE) {
                $response = $this->orderResource->capture($paypalOrderId, $salesChannelId, $partnerAttributionId);
                if ($response->getStatus() === PaymentStatusV2::ORDER_COMPLETED) {
                    $this->orderTransactionStateHandler->paid($transactionId, $context);
                }
            } else {
                $this->orderResource->authorize($paypalOrderId, $salesChannelId, $partnerAttributionId);
            }
        } catch (PayPalApiException $e) {
            $parameters = $e->getParameters();
            if (!isset($parameters['name']) || $parameters['name'] !== PayPalApiException::ERROR_CODE_DUPLICATE_ORDER_NUMBER) {
                throw $e;
            }

            $this->logger->warning($e->getMessage());

            $this->orderResource->update(
                [$this->orderNumberPatchBuilder->createOrderNumberPatch(null)],
                $paypalOrderId,
                $salesChannelId,
                $partnerAttributionId
            );

            if ($paypalOrder->getIntent() === PaymentIntentV2::CAPTURE) {
                $response = $this->orderResource->capture($paypalOrderId, $salesChannelId, $partnerAttributionId);
                if ($response->getStatus() === PaymentStatusV2::ORDER_COMPLETED) {
                    $this->orderTransactionStateHandler->paid($transactionId, $context);
                }
            } else {
                $this->orderResource->authorize($paypalOrderId, $salesChannelId, $partnerAttributionId);
            }
        } catch (\Exception $e) {
            throw new AsyncPaymentFinalizeException(
                $transactionId,
                \sprintf('An error occurred during the communication with PayPal%s%s', PHP_EOL, $e->getMessage())
            );
        }
    }
}
