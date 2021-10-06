/*! For license information please see swag-pay-pal.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([["swag-pay-pal"],{"5eYc":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return d}));var r=n("gHbT");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l,f,p,d=function(e){function n(){return i(this,n),c(this,u(n).apply(this,arguments))}var o,l,f;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(n,e),o=n,(l=[{key:"init",value:function(){var e=this;if(!1!=(!0===r.a.getDataAttribute(this.el,this.options.isConfirmPageKey,!1))){var n=r.a.querySelector(document,"body");t(n).on("shown.bs.modal",(function(t){t.target.classList.contains("confirm-payment-modal")&&e.createInstallmentBanner()}))}else this.createInstallmentBanner()}},{key:"createInstallmentBanner",value:function(){var t=this;this.createScript((function(e){e.Messages(t.getBannerConfig()).render(t.el)}))}},{key:"getBannerConfig",value:function(){return{amount:this.options.amount,currency:this.options.currency,style:{layout:this.options.layout,color:this.options.color,ratio:this.options.ratio,logo:{type:this.options.logoType},text:{color:this.options.textColor}}}}}])&&a(o.prototype,l),f&&a(o,f),n}(n("LkB+").a);p={clientId:"",amount:0,currency:"EUR",layout:"text",color:"blue",ratio:"8x1",logoType:"primary",textColor:"black",isConfirmPageKey:"swag-paypal-installment-banner-is-confirm"},(f="options")in(l=d)?Object.defineProperty(l,f,{value:p,enumerable:!0,configurable:!0,writable:!0}):l[f]=p}).call(this,n("UoTJ"))},CiWO:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}));var o=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"loadingScript",!1),r(this,"paypal",null),r(this,"callbacks",[])}},"LkB+":function(t,e,n){"use strict";var r=n("FGIj"),o=n("gHbT");function i(t){var e="https://www.paypal.com/sdk/js";t.sdkBaseURL&&(e=t.sdkBaseURL,delete t.sdkBaseURL);var n=function(t,e){var n="",r="";Array.isArray(t)?t.length>1?(n="*",r=t.toString()):n=t.toString():"string"==typeof t&&t.length>0?n=t:"string"==typeof e&&e.length>0&&(n="*",r=e);return{"merchant-id":n,"data-merchant-id":r}}(t["merchant-id"],t["data-merchant-id"]),r=Object.assign({},t,n),o=Object.keys(r).filter((function(t){return void 0!==r[t]&&null!==r[t]&&""!==r[t]})).reduce((function(t,e){var n=r[e].toString();return"data-"===e.substring(0,5)?t.dataAttributes[e]=n:t.queryParams[e]=n,t}),{queryParams:{},dataAttributes:{}}),i=o.queryParams,c=o.dataAttributes;return{url:e+"?"+a(i),dataAttributes:c}}function a(t){var e="";return Object.keys(t).forEach((function(n){0!==e.length&&(e+="&"),e+=n+"="+t[n]})),e}function c(t,e){void 0===e&&(e={});var n=document.createElement("script");return n.src=t,Object.keys(e).forEach((function(t){n.setAttribute(t,e[t]),"data-csp-nonce"===t&&n.setAttribute("nonce",e["data-csp-nonce"])})),n}function u(t,e){if(void 0===e&&(e=s()),f(t,e),"undefined"==typeof window)return e.resolve(null);var n=i(t),r=n.url,o=n.dataAttributes,a=o["data-namespace"]||"paypal",u=l(a);return function(t,e){var n=document.querySelector('script[src="'+t+'"]');if(null===n)return null;var r=c(t,e),o=Object.assign({},n.dataset);if(delete o.uidAuto,Object.keys(o).length!==Object.keys(r.dataset).length)return null;var i=!0;return Object.keys(o).forEach((function(t){o[t]!==r.dataset[t]&&(i=!1)})),i?n:null}(r,o)&&u?e.resolve(u):function(t,e){void 0===e&&(e=s());f(t,e);var n=t.url,r=t.attributes;if("string"!=typeof n||0===n.length)throw new Error("Invalid url.");if(void 0!==r&&"object"!=typeof r)throw new Error("Expected attributes to be an object.");return new e((function(t,e){if("undefined"==typeof window)return t();!function(t){var e=t.url,n=t.attributes,r=t.onSuccess,o=t.onError,i=c(e,n);i.onerror=o,i.onload=r,document.head.insertBefore(i,document.head.firstElementChild)}({url:n,attributes:r,onSuccess:function(){return t()},onError:function(){return e(new Error('The script "'+n+'" failed to load.'))}})}))}({url:r,attributes:o},e).then((function(){var t=l(a);if(t)return t;throw new Error("The window."+a+" global variable is not available.")}))}function s(){if("undefined"==typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function l(t){return window[t]}function f(t,e){if("object"!=typeof t||null===t)throw new Error("Expected an options object.");if(void 0!==e&&"function"!=typeof e)throw new Error("Expected PromisePonyfill to be a function.")}var p=n("CiWO");function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return S}));var g,w,O,P=["card","credit","bancontact","blik","eps","giropay","ideal","mybank","p24","sepa","sofort","venmo"],S=function(t){function e(){return y(this,e),b(this,m(e).apply(this,arguments))}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,t),n=e,(r=[{key:"createScript",value:function(t){null===this.constructor.scriptLoading.paypal?(this.constructor.scriptLoading.callbacks.push(t),this.constructor.scriptLoading.loadingScript||(this.constructor.scriptLoading.loadingScript=!0,u(this.getScriptOptions()).then(this.callCallbacks.bind(this)))):t.call(this,this.constructor.scriptLoading.paypal)}},{key:"callCallbacks",value:function(){var t=this;null===this.constructor.scriptLoading.paypal&&(this.constructor.scriptLoading.paypal=window.paypal,delete window.paypal),this.constructor.scriptLoading.callbacks.forEach((function(e){e.call(t,t.constructor.scriptLoading.paypal)}))}},{key:"getScriptOptions",value:function(){var t={components:"marks,buttons,messages","client-id":this.options.clientId,commit:!!this.options.commit,locale:this.options.languageIso,currency:this.options.currency,intent:this.options.intent};return!1===this.options.useAlternativePaymentMethods?t["disable-funding"]=P.join(","):Array.isArray(this.options.disabledAlternativePaymentMethods)&&(t["disable-funding"]=this.options.disabledAlternativePaymentMethods.join(",")),t}},{key:"createError",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=this.options.addErrorUrl,i={_csrf_token:o.a.getDataAttribute(this.el,"data-swag-pay-pal-add-error-token"),error:t,cancel:e};this._client.post(r,JSON.stringify(i),(function(){n?window.location=n:(window.onbeforeunload=function(){window.scrollTo(0,0)},window.location.reload())}))}}])&&h(n.prototype,r),i&&h(n,i),e}(r.a);g=S,w="scriptLoading",O=new p.a,w in g?Object.defineProperty(g,w,{value:O,enumerable:!0,configurable:!0,writable:!0}):g[w]=O},dkCy:function(t,e,n){"use strict";n.r(e);var r=n("p4AR"),o=n("gHbT"),i=n("u0Tz"),a=n("LkB+"),c=n("CiWO");function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t){function e(){return s(this,e),f(this,p(e).apply(this,arguments))}var n,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),n=e,(a=[{key:"init",value:function(){this._client=new r.a,this.createButton()}},{key:"createButton",value:function(){var t=this;this.createScript((function(e){t.renderButton(e)}))}},{key:"renderButton",value:function(t){return t.Buttons(this.getButtonConfig()).render(this.el)}},{key:"getBuyButtonState",value:function(){if(!this.options.addProductToCart)return{element:null,disabled:!1};var t=o.a.querySelector(this.el.closest("form"),this.options.buyButtonSelector);return{element:t,disabled:t.disabled}}},{key:"observeBuyButton",value:function(t,e,n){var r=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{attributes:!0},i=function(t){var o=!0,i=!1,a=void 0;try{for(var c,u=t[Symbol.iterator]();!(o=(c=u.next()).done);o=!0)if("disabled"===c.value.attributeName){if(r.getBuyButtonState().disabled)return void n();e()}}catch(t){i=!0,a=t}finally{try{o||null==u.return||u.return()}finally{if(i)throw a}}},a=new MutationObserver(i);return a.observe(t,o),a}},{key:"getButtonConfig",value:function(){var t=this,e=this.el,n=this.getBuyButtonState(),r=n.element,o=n.disabled;return{onInit:function(n,i){if(t.options.addProductToCart){var a=function(){i.enable(),e.classList.remove(t.options.disabledClass)},c=function(){i.disable(),e.classList.add(t.options.disabledClass)};t.observeBuyButton(r,a,c),o?c():a()}},style:{size:this.options.buttonSize,shape:this.options.buttonShape,color:this.options.buttonColor,tagline:this.options.tagline,layout:"horizontal",label:"checkout",height:40},createOrder:this.createOrder.bind(this),onApprove:this.onApprove.bind(this),onCancel:this.onCancel.bind(this),onError:this.onError.bind(this)}}},{key:"createOrder",value:function(){var t=this,e={paymentMethodId:this.options.payPalPaymentMethodId};return new Promise((function(n,r){t._client.patch(t.options.contextSwitchUrl,JSON.stringify(e),(function(e,o){return o.status>=400&&r(e),Promise.resolve().then((function(){return t.options.addProductToCart?t.addProductToCart():Promise.resolve()})).then((function(){return t._createOrder()})).then((function(t){n(t)})).catch((function(t){r(t)}))}))}))}},{key:"_createOrder",value:function(){var t=this;return new Promise((function(e,n){t._client.post(t.options.createOrderUrl,new FormData,(function(t,r){r.status>=400&&n(t);try{var o=JSON.parse(t);e(o.token)}catch(t){n(t)}}))}))}},{key:"addProductToCart",value:function(){var t=this,e=this.el.closest("form"),n=o.a.querySelector(e,this.options.buyButtonSelector),r=window.PluginManager.getPluginInstanceFromElement(e,"AddToCart");return new Promise((function(e){t._client.delete(t.options.deleteCartUrl,null,(function(){r.$emitter.subscribe("openOffCanvasCart",(function(){e()})),n.click()}))}))}},{key:"onApprove",value:function(t,e){var n=this,r={token:t.orderID};i.a.create(document.body),this._client.post(this.options.prepareCheckoutUrl,JSON.stringify(r),(function(t,r){return r.status<400?e.redirect(n.options.checkoutConfirmUrl):n.createError(t,!1,n.options.cancelRedirectUrl)}))}},{key:"onError",value:function(t){this.createError(t)}},{key:"onCancel",value:function(t){this.createError(t,!0,this.options.cancelRedirectUrl)}}])&&l(n.prototype,a),c&&l(n,c),e}(a.a);y(h,"scriptLoading",new c.a),y(h,"options",{disabledClass:"is-disabled",buyButtonSelector:".btn-buy",buttonColor:"gold",buttonShape:"rect",buttonSize:"small",languageIso:"en_GB",clientId:"",currency:"EUR",intent:"capture",commit:!1,tagline:!1,addProductToCart:!1,contextSwitchUrl:"",payPalPaymentMethodId:"",createOrderUrl:"",deleteCartUrl:"",prepareCheckoutUrl:"",checkoutConfirmUrl:"",addErrorUrl:"",cancelRedirectUrl:""});var b=n("2Y4b"),m=n("3xtq");function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var k,C,_,j=function(t){function e(){return g(this,e),O(this,P(e).apply(this,arguments))}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,t),n=e,(i=[{key:"init",value:function(){this._client=new r.a,this.createButton()}},{key:"createButton",value:function(){var t=this;this.createScript((function(e){t.renderButton(e)}))}},{key:"renderButton",value:function(t){return this.confirmOrderForm=o.a.querySelector(document,this.options.confirmOrderFormSelector),o.a.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).classList.add("d-none"),t.Buttons(this.getButtonConfig()).render(this.el)}},{key:"getButtonConfig",value:function(){return{style:{size:this.options.buttonSize,shape:this.options.buttonShape,color:this.options.buttonColor,label:"checkout"},createOrder:this.createOrder.bind(this),onApprove:this.onApprove.bind(this),onCancel:this.onCancel.bind(this),onClick:this.onClick.bind(this),onError:this.onError.bind(this)}}},{key:"createOrder",value:function(){var t=this;if(!this.confirmOrderForm.checkValidity())throw new Error("Checkout form not valid");var e=b.a.serialize(this.confirmOrderForm),n=this.options.orderId;return null!==n&&e.set("orderId",n),new Promise((function(n,r){t._client.post(t.options.createOrderUrl,e,(function(t,e){e.status>=400&&r(t);try{var o=JSON.parse(t);n(o.token)}catch(t){r(t)}}))}))}},{key:"onApprove",value:function(t){m.a.create();var e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("name","paypalOrderId"),e.setAttribute("value",t.orderID),this.confirmOrderForm.appendChild(e),this.confirmOrderForm.submit()}},{key:"onCancel",value:function(){this.createError(null,!0)}},{key:"onClick",value:function(t,e){return this.confirmOrderForm.checkValidity()?e.resolve():e.reject()}},{key:"onError",value:function(t){this.createError(t)}}])&&w(n.prototype,i),a&&w(n,a),e}(a.a);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}_={buttonColor:"gold",buttonShape:"rect",buttonSize:"small",languageIso:"en_GB",clientId:"",currency:"EUR",intent:"capture",commit:!0,useAlternativePaymentMethods:!0,disabledAlternativePaymentMethods:[],createOrderUrl:"",checkoutConfirmUrl:"",orderId:null,accountOrderEditUrl:"",checkedPaymentMethodSelector:"input.payment-method-input[checked=checked]",confirmOrderFormSelector:"#confirmOrderForm",confirmOrderButtonSelector:'button[type="submit"]',addErrorUrl:""},(C="options")in(k=j)?Object.defineProperty(k,C,{value:_,enumerable:!0,configurable:!0,writable:!0}):k[C]=_;var x=function(t){function e(){return B(this,e),U(this,A(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(e,t),n=e,(r=[{key:"init",value:function(){this.createMarks()}},{key:"createMarks",value:function(){var t=this;this.createScript((function(e){e.Marks().render(t.el)}))}}])&&I(n.prototype,r),o&&I(n,o),e}(a.a);function M(t){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function J(t,e){return!e||"object"!==M(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function q(t,e){return(q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}T(x,"loadingScript",!1),T(x,"options",{clientId:"",languageIso:"en_GB",currency:"EUR",intent:"capture",commit:!0,useAlternativePaymentMethods:!0,disabledAlternativePaymentMethods:[]});var z=function(t){function e(){return R(this,e),J(this,N(e).apply(this,arguments))}var n,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&q(t,e)}(e,t),n=e,(a=[{key:"init",value:function(){o.a.querySelector(document,"#confirmOrderForm").addEventListener("submit",this.onConfirmCheckout.bind(this)),this.createPaymentWall()}},{key:"createPaymentWall",value:function(){this.paypal=window.PAYPAL,this.paypal.apps.PPP({placeholder:this.options.placeholder,approvalUrl:this.options.approvalUrl,mode:this.options.mode,country:this.options.customerCountryIso,buttonLocation:this.options.buttonLocation,language:this.options.customerSelectedLanguage,useraction:this.options.userAction,surcharging:this.options.surcharging,showLoadingIndicator:this.options.showLoadingIndicator,showPuiOnSandbox:this.options.showPuiOnSandbox,onLoad:this.onPaymentSelectionLoad})}},{key:"onConfirmCheckout",value:function(t){var e=this;t.preventDefault();var n=t.target;if(n.checkValidity()){this._client=new r.a;var o=b.a.serialize(n);i.a.create(document.body);var a=this.options.orderId;this._client.patch(this.options.contextSwitchUrl,JSON.stringify({languageId:this.options.languageId}),(function(){if(null!==a)return o.set("orderId",a),void e._client.post(e.options.setPaymentRouteUrl,o,e.afterSetPayment.bind(e));e._client.post(e.options.checkoutOrderUrl,o,e.afterCreateOrder.bind(e))}))}}},{key:"afterCreateOrder",value:function(t){var e={orderId:JSON.parse(t).id,paypalPaymentId:this.options.paypalPaymentId,paypalToken:this.options.paypalToken};e[this.options.isEnabledParameterName]=!0,this._client.post(this.options.handlePaymentUrl,JSON.stringify(e),this.afterPayOrder.bind(this))}},{key:"afterSetPayment",value:function(t){!0===JSON.parse(t).success&&this.afterCreateOrder(JSON.stringify({id:this.options.orderId}))}},{key:"afterPayOrder",value:function(t){"plusPatched"===JSON.parse(t).redirectUrl&&this.paypal.apps.PPP.doCheckout()}},{key:"onPaymentSelectionLoad",value:function(){document.$emitter.publish("paypalPlusSelectionLoaded")}}])&&F(n.prototype,a),c&&F(n,c),e}(n("FGIj").a);!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(z,"options",{placeholder:"ppplus",approvalUrl:"",paypalPaymentId:"",paypalToken:"",customerCountryIso:"",mode:"live",buttonLocation:"outside",preSelection:"paypal",userAction:"commit",customerSelectedLanguage:"en_GB",surcharging:!1,showLoadingIndicator:!0,showPuiOnSandbox:!0,checkoutOrderUrl:"",handlePaymentUrl:"",setPaymentRouteUrl:"",contextSwitchUrl:"",isEnabledParameterName:"isPayPalPlusCheckout",languageId:null,orderId:null});var D=n("5eYc"),G=window.PluginManager;G.register("SwagPayPalExpressButton",h,"[data-swag-paypal-express-button]"),G.register("SwagPayPalSmartPaymentButtons",j,"[data-swag-paypal-smart-payment-buttons]"),G.register("SwagPayPalMarks",x,"[data-swag-paypal-marks]"),G.register("SwagPayPalPlusPaymentWall",z,"[data-swag-paypal-payment-wall]"),G.register("SwagPayPalInstallmentBanner",D.a,"[data-swag-paypal-installment-banner]")}},[["dkCy","runtime","vendor-node","vendor-shared"]]]);