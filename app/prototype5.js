//关联对象
//委托设计模式
function Foo() {
}
Foo.prototype.cool1 = function () {
    console.log('cool');
};
function Bar() {
}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.doCool = function () {
    console.log('do cool');
    //委托原型对象执行cool1
    this.cool1();
};
//不使用委托
var bar = new Bar();
bar.cool1();
bar.doCool();




