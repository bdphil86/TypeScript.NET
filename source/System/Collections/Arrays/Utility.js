/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE
 */
define(["require", "exports", '../../Types', '../../System'], function (require, exports, Types, System) {
    var ArrayUtility;
    (function (ArrayUtility) {
        function initialize(length) {
            var array;
            if (length > 65536)
                array = new Array(length);
            else {
                array = [];
                array.length = length;
            }
            return array;
        }
        ArrayUtility.initialize = initialize;
        function copy(sourceArray, sourceIndex, length) {
            if (sourceIndex === void 0) { sourceIndex = 0; }
            if (length === void 0) { length = Infinity; }
            if (!sourceArray)
                return sourceArray;
            var sourceLength = sourceArray.length;
            return (sourceIndex || length < sourceLength)
                ? sourceArray.slice(sourceIndex, Math.min(length, sourceLength) - sourceLength)
                : sourceArray.slice(0);
        }
        ArrayUtility.copy = copy;
        function copyTo(sourceArray, destinationArray, sourceIndex, destinationIndex, length) {
            if (sourceIndex === void 0) { sourceIndex = 0; }
            if (destinationIndex === void 0) { destinationIndex = 0; }
            if (length === void 0) { length = Infinity; }
            if (!sourceArray)
                throw new Error("ArgumentNullException: source array cannot be null.");
            if (!destinationArray)
                throw new Error("ArgumentNullException: destination array cannot be null.");
            if (sourceIndex < 0)
                throw new Error("ArgumentOutOfRangeException: source index cannot be less than zero.");
            var sourceLength = sourceArray.length;
            if (sourceIndex >= sourceLength)
                throw new Error("ArgumentOutOfRangeException: the source index must be less than the length of the source array.");
            if (destinationArray.length < 0)
                throw new Error("ArgumentOutOfRangeException: destination index cannot be less than zero.");
            var maxLength = sourceArray.length - sourceIndex;
            if (isFinite(length) && length > maxLength)
                throw new Error("ArgumentOutOfRangeException: source index + length cannot exceed the length of the source array.");
            length = Math.min(length, maxLength);
            for (var i = 0; i < length; ++i) {
                destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
            }
        }
        ArrayUtility.copyTo = copyTo;
        function contains(array, item) { return !array ? false : array.indexOf(item) != -1; }
        ArrayUtility.contains = contains;
        function replace(array, old, newValue, max) {
            var count = 0 | 0;
            if (max !== 0) {
                if (!max)
                    max = Infinity;
                for (var i = (array.length - 1) | 0; i >= 0; --i) {
                    if (array[i] === old) {
                        array[i] = newValue;
                        ++count;
                        if (!--max)
                            break;
                    }
                }
            }
            return count;
        }
        ArrayUtility.replace = replace;
        function updateRange(array, value, index, length) {
            var end = index + length;
            for (var i = index; i < end; ++i) {
                array[i] = value;
            }
        }
        ArrayUtility.updateRange = updateRange;
        function clear(array, index, length) {
            updateRange(array, null, index, length);
        }
        ArrayUtility.clear = clear;
        function register(array, item) {
            if (!array)
                throw new Error("ArgumentNullException: 'array' cannot be null.");
            var len = array.length;
            var ok = !len || !contains(array, item);
            if (ok)
                array[len] = item;
            return ok;
        }
        ArrayUtility.register = register;
        function findIndex(array, predicate) {
            if (!array)
                throw new Error("ArgumentNullException: 'array' cannot be null.");
            if (!Types.isFunction(predicate))
                throw new Error("InvalidArgumentException: 'predicate' must be a function.");
            var len = array.length | 0;
            for (var i = 0 | 0; i < len; ++i) {
                if (i in array && predicate(array[i]))
                    return i;
            }
            return -1;
        }
        ArrayUtility.findIndex = findIndex;
        function areAllEqual(arrays, strict) {
            if (!arrays)
                throw new Error("ArgumentNullException: 'arrays' cannot be null.");
            if (arrays.length < 2)
                throw new Error("Cannot compare a set of arrays less than 2.");
            var first = arrays[0];
            for (var i = 0 | 0, l = arrays.length | 0; i < l; ++i) {
                if (!areEqual(first, arrays[i], strict))
                    return false;
            }
            return true;
        }
        ArrayUtility.areAllEqual = areAllEqual;
        function areEqual(a, b, strict, equalityComparer) {
            if (equalityComparer === void 0) { equalityComparer = System.areEqual; }
            if (a === b)
                return true;
            var len = a.length | 0;
            if (len != (b.length | 0))
                return false;
            for (var i = 0 | 0; i < len; ++i) {
                if (!equalityComparer(a[i], b[i], strict))
                    return false;
            }
            return true;
        }
        ArrayUtility.areEqual = areEqual;
        function forEach(sourceArray, fn) {
            sourceArray.every(function (value, index) { return fn(value, index) !== false; });
        }
        ArrayUtility.forEach = forEach;
        function applyTo(target, fn) {
            if (!target)
                throw new Error("ArgumentNullException: 'target' cannot be null.");
            if (fn) {
                for (var i = 0 | 0; i < target.length; ++i) {
                    target[i] = fn(target[i]);
                }
            }
            return target;
        }
        ArrayUtility.applyTo = applyTo;
        function removeIndex(array, index) {
            if (!array)
                throw new Error("ArgumentNullException: 'array' cannot be null.");
            var exists = index < array.length;
            if (exists)
                array.splice(index, 1);
            return exists;
        }
        ArrayUtility.removeIndex = removeIndex;
        function remove(array, value, max) {
            if (!array)
                throw new Error("ArgumentNullException: 'array' cannot be null.");
            var count = 0;
            if (array && array.length && max !== 0) {
                if (!max)
                    max = Infinity;
                for (var i = (array.length - 1) | 0; i >= 0; --i) {
                    if (array[i] === value) {
                        array.splice(i, 1);
                        ++count;
                        if (!--max)
                            break;
                    }
                }
            }
            return count;
        }
        ArrayUtility.remove = remove;
        function repeat(element, count) {
            var result = [];
            while (count--) {
                result.push(element);
            }
            return result;
        }
        ArrayUtility.repeat = repeat;
        function sum(source, ignoreNaN) {
            if (ignoreNaN === void 0) { ignoreNaN = false; }
            if (!source || !source.length)
                return 0;
            var result = 0;
            if (ignoreNaN)
                source.forEach(function (n) {
                    if (!isNaN(n))
                        result += n;
                });
            else
                source.every(function (n) {
                    result += n;
                    return !isNaN(result);
                });
            return result;
        }
        ArrayUtility.sum = sum;
        function average(source, ignoreNaN) {
            if (ignoreNaN === void 0) { ignoreNaN = false; }
            if (!source || !source.length)
                return NaN;
            var result = 0, count;
            if (ignoreNaN) {
                count = 0;
                source.forEach(function (n) {
                    if (!isNaN(n)) {
                        result += n;
                        count++;
                    }
                });
            }
            else {
                count = source.length;
                source.every(function (n) {
                    result += n;
                    return !isNaN(result);
                });
            }
            return (!count || isNaN(result)) ? NaN : (result / count);
        }
        ArrayUtility.average = average;
        function product(source, ignoreNaN) {
            if (ignoreNaN === void 0) { ignoreNaN = false; }
            if (!source || !source.length)
                return NaN;
            var result = 1;
            if (ignoreNaN) {
                var found = false;
                source.forEach(function (n) {
                    if (!isNaN(n)) {
                        result *= n;
                        if (!found)
                            found = true;
                    }
                });
                if (!found)
                    result = NaN;
            }
            else {
                source.every(function (n) {
                    if (isNaN(n)) {
                        result = NaN;
                        return false;
                    }
                    result *= n;
                    return true;
                });
            }
            return result;
        }
        ArrayUtility.product = product;
        function ifSet(source, start, ignoreNaN, predicate) {
            if (!source || !source.length)
                return NaN;
            var result = start;
            if (ignoreNaN) {
                var found = false;
                source.forEach(function (n) {
                    if (!isNaN(n)) {
                        if (predicate(n, result))
                            result = n;
                        if (!found)
                            found = true;
                    }
                });
                if (!found)
                    result = NaN;
            }
            else {
                source.every(function (n) {
                    if (isNaN(n)) {
                        result = NaN;
                        return false;
                    }
                    if (predicate(n, result))
                        result = n;
                    return true;
                });
            }
            return result;
        }
        function min(source, ignoreNaN) {
            if (ignoreNaN === void 0) { ignoreNaN = false; }
            return ifSet(source, +Infinity, ignoreNaN, function (n, result) { return n < result; });
        }
        ArrayUtility.min = min;
        function max(source, ignoreNaN) {
            if (ignoreNaN === void 0) { ignoreNaN = false; }
            return ifSet(source, -Infinity, ignoreNaN, function (n, result) { return n > result; });
        }
        ArrayUtility.max = max;
    })(ArrayUtility || (ArrayUtility = {}));
    return ArrayUtility;
});
//# sourceMappingURL=Utility.js.map