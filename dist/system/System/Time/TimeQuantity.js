/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
System.register(["../Compare", "./TimeUnit", "../Lazy"], function (exports_1, context_1) {
    "use strict";
    var Compare_1, TimeUnit_1, Lazy_1, TimeQuantity;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Compare_1_1) {
                Compare_1 = Compare_1_1;
            },
            function (TimeUnit_1_1) {
                TimeUnit_1 = TimeUnit_1_1;
            },
            function (Lazy_1_1) {
                Lazy_1 = Lazy_1_1;
            }
        ],
        execute: function () {/*!
             * @author electricessence / https://github.com/electricessence/
             * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
             */
            /**
             * This class provides a simple means for storing and calculating time quantities.
             */
            TimeQuantity = /** @class */ (function () {
                function TimeQuantity(_quantity) {
                    if (_quantity === void 0) { _quantity = 0; }
                    this._quantity = _quantity;
                    this._resetTotal();
                }
                // Provides an overridable mechanism for extending this class.
                TimeQuantity.prototype.getTotalMilliseconds = function () {
                    return this._quantity;
                };
                Object.defineProperty(TimeQuantity.prototype, "direction", {
                    /**
                     * +1, 0, or -1 depending on the time direction.
                     * @returns {number}
                     */
                    get: function () {
                        return Compare_1.compare(this.getTotalMilliseconds(), 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Compares this instance against any other time quantity instance and return true if the amount of time is the same.
                 * @param other
                 * @returns {boolean}
                 */
                TimeQuantity.prototype.equals = function (other) {
                    return Compare_1.areEqual(this.getTotalMilliseconds(), other && other.total && other.total.milliseconds);
                };
                /**
                 * Compares this instance against any other time quantity instance.
                 * @param other
                 * @returns {number}
                 */
                TimeQuantity.prototype.compareTo = function (other) {
                    return Compare_1.compare(this.getTotalMilliseconds(), other && other.total && other.total.milliseconds);
                };
                TimeQuantity.prototype._resetTotal = function () {
                    var _this = this;
                    var t = this._total;
                    if (!t || t.isValueCreated) {
                        this._total = Lazy_1.Lazy.create(function () {
                            var ms = _this.getTotalMilliseconds();
                            return Object.freeze({
                                ticks: ms * 10000 /* Millisecond */,
                                milliseconds: ms,
                                seconds: ms / 1000 /* Second */,
                                minutes: ms / 60000 /* Minute */,
                                hours: ms / 3600000 /* Hour */,
                                days: ms / 86400000 /* Day */,
                            });
                        });
                    }
                };
                Object.defineProperty(TimeQuantity.prototype, "total", {
                    /**
                     * Returns an object with all units exposed as totals.
                     * @returns {ITimeMeasurement}
                     */
                    get: function () {
                        return this._total.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Returns the total amount of time measured in the requested TimeUnit.
                 * @param units
                 * @returns {number}
                 */
                TimeQuantity.prototype.getTotal = function (units) {
                    return TimeUnit_1.TimeUnit.fromMilliseconds(this.getTotalMilliseconds(), units);
                };
                return TimeQuantity;
            }());
            exports_1("TimeQuantity", TimeQuantity);
            exports_1("default", TimeQuantity);
        }
    };
});
//# sourceMappingURL=TimeQuantity.js.map