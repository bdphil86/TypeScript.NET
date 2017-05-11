/*!
 * @author electricessence / https://github.com/electricessence/
 * Based Upon: http://referencesource.microsoft.com/#System/CompMod/system/collections/generic/queue.cs
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../Compare","./Array/Utility","../Types","../Integer","./Enumeration/EnumeratorBase","../Exceptions/NotImplementedException","../Exceptions/InvalidOperationException","../Exceptions/ArgumentOutOfRangeException","./CollectionBase","../../extends"],function(e,t,r,i,n,a,o,s,u,c,p,_){"use strict";function y(e,t){if(e<0)throw new c.ArgumentOutOfRangeException(t,e,"Must be greater than zero");return!0}function l(e,t){return a.Integer.assert(e,t),y(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var f=_["default"],h=void 0,d=4,v=32,m=100,E=d,g=Object.freeze([]),z=function(e){function t(t,a){void 0===a&&(a=r.areEqual);var o=e.call(this,h,a)||this,s=o;if(s._head=0,s._tail=0,s._size=0,t)if(n.Type.isNumber(t)){var u=t;l(u,"capacity"),s._array=u?i.initialize(u):g}else{var c=t;s._array=i.initialize(n.Type.isArrayLike(c)?c.length:E),s._importEntries(c)}else s._array=g;return s._capacity=s._array.length,o}return f(t,e),t.prototype.getCount=function(){return this._size},t.prototype._addInternal=function(e){var t=this,r=t._size,i=t._capacity;if(r==i){var n=i*m;n<i+d&&(n=i+d),t.setCapacity(n),i=t._capacity}var a=t._tail;return t._array[a]=e,t._tail=(a+1)%i,t._size=r+1,!0},t.prototype._removeInternal=function(e,t){throw new s.NotImplementedException("ICollection<T>.remove is not implemented in Queue<T> since it would require destroying the underlying array to remove the item.")},t.prototype._clearInternal=function(){var e=this,t=e._array,r=e._head,n=e._tail,a=e._size;return r<n?i.clear(t,r,n):(i.clear(t,r),i.clear(t,0,n)),e._head=0,e._tail=0,e._size=0,e.trimExcess(),a},t.prototype._onDispose=function(){e.prototype._onDispose.call(this);var t=this;t._array!=g&&(t._array.length=t._capacity=0,t._array=g)},t.prototype.dump=function(e){void 0===e&&(e=1/0);var t=this,r=[];if(isFinite(e)){if(a.Integer.assertZeroOrGreater(e),0!==e)for(;e--&&t._tryDequeueInternal(function(e){r.push(e)}););}else for(;t._tryDequeueInternal(function(e){r.push(e)}););return t.trimExcess(),t._signalModification(),r},t.prototype.forEach=function(t){return e.prototype.forEach.call(this,t,!0)},t.prototype.setCapacity=function(e){var t=this;l(e,"capacity");var r=t._array,n=t._capacity;if(e>n&&t.throwIfDisposed(),e==n)return this;var a=t._head,o=t._tail,s=t._size;if(r!=g&&e>n&&a<o)return r.length=t._capacity=e,t._version++,this;var u=i.initialize(e);return s>0&&(a<o?i.copyTo(r,u,a,0,s):(i.copyTo(r,u,a,0,n-a),i.copyTo(r,u,0,n-a,o))),t._array=u,t._capacity=e,t._head=0,t._tail=s==e?0:s,t._signalModification(!0),this},t.prototype.enqueue=function(e){return this.add(e)},t.prototype._tryDequeueInternal=function(e){var t=this;if(!t._size)return!1;var r=t._array,i=t._head,n=t._array[i];return r[i]=null,t._head=(i+1)%t._capacity,t._size--,t._incrementModified(),e(n),!0},t.prototype.dequeue=function(e){void 0===e&&(e=!1);var t=this;t.assertModifiable();var r=h;if(!this.tryDequeue(function(e){r=e})&&e)throw new u.InvalidOperationException("Cannot dequeue an empty queue.");return r},t.prototype.tryDequeue=function(e){var t=this;return!!t._size&&(t.assertModifiable(),!!this._tryDequeueInternal(e)&&(t._size<t._capacity/2&&t.trimExcess(v),t._signalModification(),!0))},t.prototype._getElement=function(e){l(e,"index");var t=this;return t._array[(t._head+e)%t._capacity]},t.prototype.peek=function(e){if(void 0===e&&(e=!1),0==this._size){if(e)throw new u.InvalidOperationException("Cannot call peek on an empty queue.");return h}return this._array[this._head]},t.prototype.trimExcess=function(e){var t=this,r=t._size;r<Math.floor(.9*t._capacity)&&(!e&&0!==e||isNaN(e)||e<r)&&t.setCapacity(r)},t.prototype.getEnumerator=function(){var e=this;e.throwIfDisposed();var t,r,i;return new o.EnumeratorBase(function(){r=e._version,i=e._size,t=0},function(n){return e.throwIfDisposed(),e.assertVersion(r),t==i?n.yieldBreak():n.yieldReturn(e._getElement(t++))})},t}(p.CollectionBase);t.Queue=z,t["default"]=z});
//# sourceMappingURL=Queue.js.map