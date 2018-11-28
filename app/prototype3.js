//类函数
function Foo() {
}
//每个函数都有1个prototype属性（公有的、不可枚举）
//prototype属性指向1个对象：（含有constructor属性）
console.log(Foo.prototype);
// constructor -> Foo
console.log(Foo.prototype.constructor);
//使用函数创建对象
//new关键字会创建对象foo,foo会关联Foo.prototype
var foo = new Foo();
//从foo对象及对象的原型链依次查找
console.log(foo.constructor);

//扩展函数
function Bar(name) {
    this.name = name;
}
Bar.prototype.sayName = function () {
    console.log(this.name);
};
var bar = new Bar('bar');
var baz = new Bar('baz');
bar.sayName();
baz.sayName();