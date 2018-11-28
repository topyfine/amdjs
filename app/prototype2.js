// 没看懂的原型再来1遍
// for..in..
// in
// 整个1条原型继承链
// obj3 -> obj2 -> obj1 -> Object.prototype（原型链尽头）
console.log(Object.prototype);
Object.prototype.d = 'Object prototype d..';
var obj1 = {a: 'obj1 a..', b: 'obj1 b..', c: 'obj1 c..'};
var obj2 = Object.create(obj1);
obj2.a = 'obj2 a..';
obj2.b = 'obj2 b..';
var obj3 = Object.create(obj2);
obj3.a = 'obj3 a..';
console.log('>>> obj3..');
/*
obj3 a..
obj2 b..
obj1 c..
Object prototype d..
 */
console.log(obj3.a);
console.log(obj3.b);
console.log(obj3.c);
console.log(obj3.d);

// 属性覆盖
// 原型链上不存在值
obj3.e = 'obj3 e..';
/*
obj3 e.. undefined undefined
 */
console.log(obj3.e, obj2.e, obj1.e);
// 原型链上存在的值
obj3.a = 'obj3 aa..';
/*
obj3 aa.. obj2 a.. obj1 a..
 */
console.log(obj3.a, obj2.a, obj1.a);
//原型链上存在值，obj3没有
obj3.b = 'obj3 b..';
/*
obj3 b.. obj2 b.. obj1 b..
 */
console.log(obj3.b, obj2.b, obj1.b);

//js中没有类作为对象的抽象模式
//没有类描述对象的行为。所以对象直接定义自己的行为。
//所有函数拥有1个prototype属性：公有、不可枚举
