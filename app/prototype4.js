//原型继承
function Foo(name) {
    this.name = name;
}
Foo.prototype.sayName = function () {
    console.log(this.name);
};
function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}
//指定bar关联foo
//此处用来建立bar和foo的关联
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.sayLabel = function () {
    console.log(this.label);
};
// ES6语法，直接操作原型对象
// Object.setPrototypeOf(Bar.prototype, Foo.prototype);
var baz = new Bar('bar name', 'bar label');
//继承于foo的方法
baz.sayName();
//自身行为
baz.sayLabel();
