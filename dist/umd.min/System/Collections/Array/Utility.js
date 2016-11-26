!function(e,n){if("object"==typeof module&&"object"==typeof module.exports){var t=n(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(e,n)}(["require","exports","../../Types","../../Integer","../../Compare","../../Exceptions/ArgumentException","../../Exceptions/ArgumentNullException","../../Exceptions/ArgumentOutOfRangeException"],function(e,n){"use strict";function t(e){A.Integer.assert(e,"length");var n;return e>65536?n=new Array(e):(n=[],n.length=e),n}function r(e,n,r){return void 0===n&&(n=0),void 0===r&&(r=1/0),e?i(e,t(Math.min(r,Math.max(e.length-n,0))),n,0,r):e}function i(e,n,t,r,i){if(void 0===t&&(t=0),void 0===r&&(r=0),void 0===i&&(i=1/0),!e)throw new N.ArgumentNullException("source",b);if(!n)throw new N.ArgumentNullException("destination",b);if(t<0)throw new I.ArgumentOutOfRangeException("sourceIndex",t,q);var o=e.length;if(!o)return n;if(t>=o)throw new I.ArgumentOutOfRangeException("sourceIndex",t,"Must be less than the length of the source array.");if(n.length<0)throw new I.ArgumentOutOfRangeException("destinationIndex",r,q);var u=e.length-t;if(isFinite(i)&&i>u)throw new I.ArgumentOutOfRangeException("sourceIndex",t,"Source index + length cannot exceed the length of the source array.");i=Math.min(i,u);var a=r+i;a>n.length&&(n.length=a);for(var f=0;f<i;f++)n[r+f]=e[t+f];return n}function o(e,n,t){void 0===t&&(t=y.areEqual);var r=e&&e.length;if(r){if(e instanceof Array&&!O.Type.isTrueNaN(n))return e.indexOf(n);for(var i=0;i<r;i++)if(t(e[i],n))return i}return-1}function u(e,n,t){return void 0===t&&(t=y.areEqual),o(e,n,t)!=-1}function a(e,n,t,r){if(!e||!e.length||0===r)return 0;if(r<0)throw new I.ArgumentOutOfRangeException("max",r,q);r||(r=1/0);for(var i=0,o=0,u=e.length;o<u&&(e[o]!==n||(e[o]=t,++i,i!=r));o++);return i}function f(e,n,t,r){if(void 0===t&&(t=0),e){if(A.Integer.assertZeroOrGreater(t,"start"),r||0===r||(r=e.length),A.Integer.assert(r,"stop"),r<t)throw new I.ArgumentOutOfRangeException("stop",r,"is less than start");for(var i=t;i<r;i++)e[i]=n}}function c(e,n,t){void 0===n&&(n=0),f(e,null,n,t)}function g(e,n,t){if(void 0===t&&(t=y.areEqual),!e)throw new N.ArgumentNullException("array",b);var r=e.length,i=!r||!u(e,n,t);return i&&(e[r]=n),i}function s(e,n){if(!e)throw new N.ArgumentNullException("array",b);if(!O.Type.isFunction(n))throw new R.ArgumentException("predicate","Must be a function.");var t=e.length;if(!O.Type.isNumber(t)||t<0)throw new R.ArgumentException("array","Does not have a valid length.");if(e instanceof Array){for(var r=0;r<t;r++)if(n(e[r],r))return r}else for(var r=0;r<t;r++)if(r in e&&n(e[r],r))return r;return-1}function l(e,n){if(e&&n)for(var t=0;t<e.length&&n(e[t],t)!==!1;t++);}function p(e,n){if(e&&n)for(var t=0;t<e.length;t++)e[t]=n(e[t],t)}function h(e,n){if(!e)throw new N.ArgumentNullException("array",b);if(A.Integer.assert(n,"index"),n<0)throw new I.ArgumentOutOfRangeException("index",n,q);var t=n<e.length;return t&&e.splice(n,1),t}function x(e,n,t,r){if(void 0===r&&(r=y.areEqual),!e||!e.length||0===t)return 0;if(t<0)throw new I.ArgumentOutOfRangeException("max",t,q);var i=0;if(t&&isFinite(t)){for(var o=[],u=0,a=e.length;u<a&&(!r(e[u],n)||(o.push(u),++i,i!=t));u++);for(var u=o.length-1;u>=0;u--)e.splice(o[u],1)}else for(var u=e.length-1;u>=0;u--)r(e[u],n)&&(e.splice(u,1),++i);return i}function v(e,n){if(A.Integer.assert(n,"count"),n<0)throw new I.ArgumentOutOfRangeException("count",n,q);for(var r=t(n),i=0;i<n;i++)r[i]=e;return r}function d(e,n,r){if(void 0===r&&(r=1),isNaN(e)||!isFinite(e))throw new I.ArgumentOutOfRangeException("first",e,M);if(isNaN(n)||!isFinite(n))throw new I.ArgumentOutOfRangeException("count",n,M);if(n<0)throw new I.ArgumentOutOfRangeException("count",n,q);for(var i=t(n),o=0;o<n;o++)i[o]=e,e+=r;return i}function m(e,n,t){if(void 0===t&&(t=1),0==t)throw new I.ArgumentOutOfRangeException("step",t,T);return d(e,(n-e)/t,t)}function w(e){var n={};return e.filter(function(e){return!(e in n)&&(n[e]=!0)})}function E(e,n){void 0===n&&(n=0);for(var t=[],r=0;r<e.length;r++){var i=e[r];if(i instanceof Array){n>0&&(i=E(i,n-1));for(var o=0;o<i.length;o++)t.push(i[o])}else t.push(i)}return t}/*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
     */
var O=e("../../Types"),A=e("../../Integer"),y=e("../../Compare"),R=e("../../Exceptions/ArgumentException"),N=e("../../Exceptions/ArgumentNullException"),I=e("../../Exceptions/ArgumentOutOfRangeException");n.initialize=t,n.copy=r;var b="Cannot be null.",T="Cannot be zero.",q="Cannot be less than zero.",M="Must be a valid finite number";n.copyTo=i,n.indexOf=o,n.contains=u,n.replace=a,n.updateRange=f,n.clear=c,n.register=g,n.findIndex=s,n.forEach=l,n.applyTo=p,n.removeIndex=h,n.remove=x,n.repeat=v,n.range=d,n.rangeUntil=m,n.distinct=w,n.flatten=E});
//# sourceMappingURL=Utility.js.map