define(["require","exports","../Types"],function(r,e,n){"use strict";function t(r){var e=0;if(0==r.length)return e;for(var n=0,t=r.length;n<t;n++){var a=r.charCodeAt(n);e=(e<<5)-e+a,e|=0}return e}function a(r,n){var t=e.EMPTY;if(!isNaN(n))for(var a=0;a<n;a++)t+=r;return t}function i(r,n){if(void 0===n&&(n=1),r instanceof Array){for(var t=e.EMPTY,i=0,o=r;i<o.length;i++){var f=o[i];t+=String.fromCharCode(f)}return t}return a(String.fromCharCode(r),n)}function o(r){return r.replace(/[-[\]\/{}()*+?.\\^$|]/g,"\\$&")}function f(r,n,t){if(n===e.EMPTY)return r;if(n){var a=o(n instanceof Array?n.join():n);return r.replace(new RegExp("^["+a+"]+|["+a+"]+$","g"+(t?"i":"")),e.EMPTY)}return r.replace(/^\s+|\s+$/g,e.EMPTY)}function u(r){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return s(r,e)}function s(r,e){var t=e instanceof Array;return r.replace(/\{([^{}]*)}/g,function(r,a){var i=a;if(t){var o=parseInt(a);isNaN(o)||(i=o)}var f=e[i];switch(typeof f){case n.Type.STRING:case n.Type.NUMBER:case n.Type.BOOLEAN:return f;default:return f&&n.Type.hasMemberOfType(f,"toString",n.Type.FUNCTION)?f.toString():r}})}function c(r,e){return!(!n.Type.isString(r)||!e)&&(r===e||(e.length<r.length?null:void 0))}function p(r,e){var t=c(r,e);return n.Type.isBoolean(t)?t:0==r.indexOf(e)}function g(r,e){var t=c(r,e);return n.Type.isBoolean(t)?t:r.lastIndexOf(e)==r.length-e.length}e.EMPTY="",e.getHashCode=t,e.repeat=a,e.fromChars=i,e.escapeRegExp=o,e.trim=f,e.format=u,e.supplant=s,e.startsWith=p,e.endsWith=g});
//# sourceMappingURL=Utility.js.map