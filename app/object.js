//js对象
//基本类型
// string,number,boolean,null,undefined  //5种原始类型
// String, Number, Boolean, Object, Array, Date, RegExp  //7种引用类型/对象类型
var obj = {};
obj.a = 'a';
obj['b b'] = 'bb';
console.log(obj['b b']);
Object.defineProperty(obj, 'b', {value: 'b', writable: false, enumerable: true, configurable: true});
console.log(obj.b);
"use strict";
obj.b = 'b-b';
// 不搜索原型链
console.log(obj.hasOwnProperty('b'));
// 搜索原型链
console.log('b' in obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'b'));
delete obj['b b'];
console.log('b b' in obj);

var arr = [];
arr.a = 'arr a';
arr[0] = 1;
arr[1] = 2;
//只是数字索引的元素
/*
arr -> 1
arr -> 2
 */
console.log(arr.a);
for (let a of arr) {
    console.log(`arr -> ${a}`);
}
//可枚举的所有元素
/*
idx -> 0
idx -> 1
idx -> a
 */
for (let idx in arr) {
    console.log(`idx -> ${idx}`);
}
