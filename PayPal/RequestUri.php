<?php declare(strict_types=1);
/**
 * (c) shopware AG <info@shopware.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SwagPayPal\PayPal;

final class RequestUri
{
    public const PAYMENT_RESOURCE = 'payments/payment';
    public const TOKEN_RESOURCE = 'oauth2/token';
    public const WEBHOOK_RESOURCE = 'notifications/webhooks';
}