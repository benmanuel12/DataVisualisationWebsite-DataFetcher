"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileToImport_1 = require("./FileToImport");
var instanceArray = [];
var myInstance = new FileToImport_1.exampleClass(1);
instanceArray.push(myInstance);
console.log("directly: " + myInstance.myattribute);
console.log("by getter: " + myInstance.getMyattribute());
console.log("by getter in array: " + instanceArray[0].getMyattribute());
console.log("in a loop");
for (var i = 0; i < instanceArray.length; i++) {
    console.log(instanceArray[i].getMyattribute());
}
