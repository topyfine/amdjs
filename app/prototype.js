//原型
//对象
var anotherObj = {a: 'another obj a..'};
//定义anotheObj的原型
//默认情况下，anotherObj的原型为：{}
Object.setPrototypeOf(anotherObj, {b: 'another obj b..'});
console.log('>>> another obj');
console.log('prototype' in anotherObj);
/*
{ b: 'another obj b..' }
 */
console.log(Object.getPrototypeOf(anotherObj));
var myObj = Object.create(anotherObj);
console.log('>>> my obj..');
/*
another obj a..
another obj b..
 */
console.log(myObj.a);
console.log(myObj.b);
console.log('prototype' in myObj);
/*
{ a: 'another obj a..' }
 */
console.log(Object.getPrototypeOf(myObj));
var nullObj = Object.create(null);
console.log('>>> null obj..');
console.log('prototype' in nullObj);
/*
null
 */
console.log(Object.getPrototypeOf(nullObj));

//函数
console.log('>>> 函数原型..');
function Foo() {
    console.log('>>> Foo..');
}
Foo.a = 'Foo a..';
console.log(Foo.prototype);
console.log(Object.getPrototypeOf(Foo));
console.log(Foo.a);
var foo = new Foo();
console.log(Object.getPrototypeOf(foo));
console.log(foo.a);
console.log(foo);
console.log(foo.constructor);
console.log(Foo);