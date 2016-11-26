define(["require","exports","../../extends"],function(e,t,r){"use strict";var n,i=r["default"],o="",u="i",s="g",c="m",a="u",f="w",p="y";!function(e){e.IGNORE_CASE=u,e.I=u,e.GLOBAL=s,e.G=s,e.MULTI_LINE=c,e.M=c,e.UNICODE=a,e.U=a,e.STICKY=p,e.Y=p,e.IGNORE_PATTERN_WHITESPACE=f,e.W=f}(n=t.RegexOptions||(t.RegexOptions={}));var h=function(){function e(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(!e)throw new Error("'pattern' cannot be null or empty.");var i,s=(t&&(t instanceof Array?t:[t]).concat(r)||r).join(o).toLowerCase();if(e instanceof RegExp){var a=e;a.ignoreCase&&s.indexOf(u)===-1&&(s+=u),a.multiline&&s.indexOf(c)===-1&&(s+=c),i=a.source}else i=e;var p=s.indexOf(f)!=-1;s=s.replace(/[gw]/g,o);var h=[],l=i.match(/(?!\(\?<)(\w+)(?=>)/g);if(l){for(var g=0,v=l.length;g<v;g++)h[g+1]=l[g];i=i.replace(/\?<\w+>/g,o),this._keys=h}p&&(i=i.replace(/\s+/g,"\\s*")),this._re=new RegExp(i,s),Object.freeze(this)}return e.prototype.match=function(e,t){void 0===t&&(t=0);var r,n=this;if(!e||t>=e.length||!(r=this._re.exec(e.substring(t))))return d.Empty;t>0||(t=0);for(var i=t+r.index,o=i,u=[],s={},c=0,a=r.length;c<a;++c){var f=r[c],p=v;null===f&&void 0===f||(p=new g(f,o),p.freeze()),c&&n._keys&&c<n._keys.length&&(s[n._keys[c]]=p),u.push(p),0!==c&&(o+=f.length)}var h=new d(r[0],i,u,s);return h.freeze(),h},e.prototype.matches=function(e){for(var t,r=[],n=0,i=e&&e.length||0;n<i&&(t=this.match(e,n))&&t.success;)r.push(t),n=t.index+t.length;return Object.freeze(r),r},e.prototype.replace=function(e,t,r){if(void 0===r&&(r=1/0),!(e&&null!==t&&void 0!==t&&r>0))return e;for(var n,i=[],u=0,s=e.length,c="function"==typeof t,a=0;a<r&&u<s&&(n=this.match(e,u))&&n.success;){var f=n.index,p=n.length;u!==f&&i.push(e.substring(u,f)),i.push(c?t(n,a++):t),u=f+p}return u<s&&i.push(e.substring(u)),i.join(o)},e.prototype.isMatch=function(e){return this._re.test(e)},e.isMatch=function(t,r,n){var i=new e(r,n);return i.isMatch(t)},e.replace=function(t,r,n,i){var o=new e(r,i);return o.replace(t,n)},e}();t.Regex=h;var l=function(){function e(e,t){void 0===e&&(e=o),void 0===t&&(t=-1),this.value=e,this.index=t}return Object.defineProperty(e.prototype,"length",{get:function(){var e=this.value;return e&&e.length||0},enumerable:!0,configurable:!0}),e.prototype.freeze=function(){Object.freeze(this)},e}();t.Capture=l;var g=function(e){function t(t,r){return void 0===t&&(t=o),void 0===r&&(r=-1),e.call(this,t,r)||this}return i(t,e),Object.defineProperty(t.prototype,"success",{get:function(){return this.index!=-1},enumerable:!0,configurable:!0}),Object.defineProperty(t,"Empty",{get:function(){return v},enumerable:!0,configurable:!0}),t}(l);t.Group=g;var v=new g;v.freeze();var d=function(e){function t(t,r,n,i){void 0===t&&(t=o),void 0===r&&(r=-1),void 0===n&&(n=[]),void 0===i&&(i={});var u=e.call(this,t,r)||this;return u.groups=n,u.namedGroups=i,u}return i(t,e),t.prototype.freeze=function(){if(!this.groups)throw new Error("'groups' cannot be null.");if(!this.namedGroups)throw new Error("'groupMap' cannot be null.");Object.freeze(this.groups),Object.freeze(this.namedGroups),e.prototype.freeze.call(this)},Object.defineProperty(t,"Empty",{get:function(){return y},enumerable:!0,configurable:!0}),t}(g);t.Match=d;var y=new d;y.freeze(),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=h});
//# sourceMappingURL=RegularExpressions.js.map