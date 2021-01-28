import {exampleClass} from './FileToImport'

let instanceArray: exampleClass[] = []

let myInstance: exampleClass = new exampleClass(1)

instanceArray.push(myInstance)

console.log("directly: " + myInstance.myattribute)
console.log("by getter: " + myInstance.getMyattribute())
console.log("by getter in array: " + instanceArray[0].getMyattribute())
console.log("in a loop")
for (let i: number = 0; i < instanceArray.length; i++) {
    console.log(instanceArray[i].getMyattribute())
}