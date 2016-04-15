/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based on code from: https://github.com/kriskowal/q
 */
define(["require","exports","../Types","../Collections/LinkedNodeList","../Collections/Queue"],function(e,t,n,o,i){"use strict";function r(){for(var e;e=l.first;){var t=e.task,n=e.domain;l.removeNode(e),n&&n.enter(),s(t,n)}for(var o;o=p.dequeue();)s(o);m=!1}function s(e,t){try{e()}catch(n){if(d)throw t&&t.exit(),setTimeout(r,0),t&&t.enter(),n;setTimeout(function(){throw n},0)}t&&t.exit()}function u(){m||(m=!0,a())}function f(e,t){if(n["default"].isNumber(t,!1)&&t>=0){var o=0,i=function(){return o?(clearTimeout(o),o=0,!0):!1};return o=setTimeout(function(){i(),e()},t),i}var r={task:e,domain:d&&process.domain};return l.addNode(r),u(),function(){return!!l.removeNode(r)}}function c(e){p.enqueue(e),u()}var a,d=!1,m=!1,l=new o["default"],p=new i["default"];if(Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=f,t.runAfterDeferred=c,n["default"].isObject(process)&&"[object process]"===process.toString()&&process.nextTick)d=!0,a=function(){process.nextTick(r)};else if("function"==typeof setImmediate)a="undefined"!=typeof window?setImmediate.bind(window,r):function(){setImmediate(r)};else if("undefined"!=typeof MessageChannel){var v=new MessageChannel;v.port1.onmessage=function(){a=w,v.port1.onmessage=r,r()};var w=function(){v.port2.postMessage(0)};a=function(){setTimeout(r,0),w()}}else a=function(){setTimeout(r,0)}});
//# sourceMappingURL=TaskScheduler.js.map
