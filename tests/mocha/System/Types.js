"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference types="node"/>
var assert = require("assert");
require("mocha");
var Types_1 = require("../../../dist/commonjs/System/Types");
var extends_1 = require("../../../dist/commonjs/extends");
//noinspection JSUnusedLocalSymbols
var __extends = extends_1.default;
describe('.hasMember()', function () {
    it('should detect a positive match for prototype functions', function () {
        var A = (function (_super) {
            __extends(A, _super);
            function A() {
                return _super.apply(this, arguments) || this;
            }
            return A;
        }(Array));
        assert.ok(Types_1.Type.hasMember(new A(), 'push'));
    });
    it('should detect a positive match', function () {
        assert.ok(Types_1.Type.hasMember({
            a: 'hello',
            b: undefined
        }, 'b'));
    });
});
//# sourceMappingURL=Types.js.map