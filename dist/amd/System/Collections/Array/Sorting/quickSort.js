/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../../../Exceptions/ArgumentNullException"],function(e,t,r){"use strict";function n(e){if(!e)throw new r.ArgumentNullException("target");var t=e.length;return e.length<2?e:o(e,0,t-1)}function o(e,t,r){if(t<r){var n=void 0,i=Math.floor((t+r)/2);n=e[i],e[i]=e[r],e[r]=n;for(var u=t,c=t;c<r;c++)e[c]<e[r]&&(n=e[u],e[u]=e[c],e[c]=n,u++);n=e[u],e[u]=e[r],e[r]=n,o(e,t,u-1),o(e,u+1,r)}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.quickSort=n});
//# sourceMappingURL=quickSort.js.map