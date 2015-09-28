/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require", "exports"], function (require, exports) {
    var ExceptionType;
    (function (ExceptionType) {
        ExceptionType.Error = 'Error';
        ExceptionType.EvalError = 'EvalError';
        ExceptionType.RangeError = 'RangeError';
        ExceptionType.ReferenceError = 'ReferenceError';
        ExceptionType.SyntaxError = 'SyntaxError';
        ExceptionType.TypeError = 'TypeError';
        ExceptionType.URIError = 'URIError';
    })(ExceptionType || (ExceptionType = {}));
    Object.freeze(ExceptionType);
    return ExceptionType;
});
//# sourceMappingURL=ExceptionType.js.map