//解释this绑定的4个基本原则
function foo() {
    console.log(this.a);
}

var obj = {a: 'obj a..', foo: foo};
var a = 'global a..';

//默认绑定
//浏览器环境下输出全局变量a的值
foo();
//隐式绑定
obj.foo();
//显式绑定
var obj2 = {a: 'obj2 a..', foo: foo};
foo.call(obj2);
foo.apply(obj2);

//new关键字绑定
function Bar(arg) {
    this.arg = arg;
}

var fn = new Bar('new a');
console.log(fn.arg);

var oo = Object.create(null);
var oo1 = {};
var oo2 = Object();
var oo3 = new Object();
var oo4 = Object;
console.log(oo.prototype);
console.log(oo1.prototype);
console.log(oo2.prototype);
console.log(oo3.prototype);
console.log(oo4.prototype);

//胖箭头
var obj3 = {a: 'obj3 a..', baz: baz};
function baz() {
    //胖箭头函数继承baz this
    setTimeout(() => {
        console.log(this.a)
    });
    //this -> global
    //默认原则
    setTimeout(function () {
       console.log(this.a);
    });
    //利用闭包缓存this，在作用域外调用
    var self = this;
    setTimeout(function () {
       console.log(self.a);
    });
}
obj3.baz();