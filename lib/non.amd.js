var Foo = (function () {
    var name = "non amd..";
    return {
        name: name,
        depts: function () {
            console.log(">>> 使用foo模块..");
            console.log($);
        }
    }
})();