console.log(">>> Hello requirejs!");
require.config({
    baseUrl: '/amdjs/lib',
    paths: {
        'jquery': 'jquery3',
        "foo": "non.amd"
    },
    shim: {
        "foo": {
            deps: ["jquery"],
            exports: "Foo"
        }
    }
});
require(["foo", "bar"], function (foo, bar) {
    console.log($);
    // console.log(foo.name);
    // 定义的foo模块是一个对象
    foo.depts();
    // 定义的bar模块是1个函数
    bar();
});