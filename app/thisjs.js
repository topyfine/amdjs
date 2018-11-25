//词法作用域实现计数
function foo() {
    console.log(">>> call foo..");
    arguments.callee.count++;
    // foo.count++;
}

foo.count = 0;
for (let i = 0; i < 3; i++) {
    //invoke
    foo();
}
console.log(">>> call foo times:" + foo.count);

//this 实现计数
// this 指向bar的执行上下文
function bar(num) {
    console.log(">>> call bar " + num);
    //
    this.count++;
}

bar.count = 0;
for (let i = 0; i < 3; i++) {
    // invoked
    // 此时bar内的this指向bar
    bar.call(bar, i);
}
console.log(">>> call bar times:" + bar.count);