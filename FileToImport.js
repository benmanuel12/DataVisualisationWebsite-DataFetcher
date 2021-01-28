"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleClass = void 0;
var exampleClass = /** @class */ (function () {
    function exampleClass(myattribute) {
        this.myattribute = myattribute;
    }
    exampleClass.prototype.getMyattribute = function () {
        return this.myattribute;
    };
    exampleClass.prototype.setMyattribute = function (myattribute) {
        this.myattribute = myattribute;
    };
    return exampleClass;
}());
exports.exampleClass = exampleClass;
