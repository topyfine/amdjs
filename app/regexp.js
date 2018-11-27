//js正则表达式
// 正则字面量和正则对象
var reg = null;
console.log('>>> 正则字面量..');
for (let i = 0; i < 3; i++) {
    reg = /\.cat/g;
    console.log(reg.test('tom.catapache'));
}
console.log('>>> 正则对象..');
for (let i = 0; i < 3; i++) {
    reg = new RegExp('\\.Cat', 'gi');
    console.log(reg.test('tom.catapache.cat'));
    console.log(`lastIndex -> ${reg.lastIndex}`);
}
//按照字面量形式而非构造函数的字符串模式
console.log(reg.source);
//RegExp exec
var str = 'mom and dad and baby';
//模式包含2个捕获组，()包含的是模式组
var pattern = /mom( and dad( and baby)?)?/;
let matches = pattern.exec(str);
console.log(matches.index);
console.log(matches.input);
/*
[ 'mom and dad and baby',
  ' and dad and baby',
  ' and baby',
  index: 0,
  input: 'mom and dad and baby' ]
 */
console.log(matches);
// exec
var str1 = 'cat,bat,fat';
var pattern1 = /.at/;
var pattern2 = /.at/g;
// 非全局匹配，每次返回第1次匹配到
/*
[ 'cat', index: 0, input: 'cat,bat,fat' ]
[ 'cat', index: 0, input: 'cat,bat,fat' ]
...
 */
/*while (true) {
    let matches1 = pattern1.exec(str1);
    console.log(matches1);
    if (matches1.length == 0) {
        break;
    }
}*/
//依次向下搜索
/*
[ 'cat', index: 0, input: 'cat,bat,fat' ]
[ 'bat', index: 4, input: 'cat,bat,fat' ]
[ 'fat', index: 8, input: 'cat,bat,fat' ]
 */
while (true) {
    let matches1 = pattern2.exec(str1);
    console.log(matches1);
    if (matches1 == null) {
        break;
    }
}
// test
var text = '000-00-0000-0';
var text1 = '000-00-0000';
var pattern3 = /\d{3}-\d{2}-\d{4}/;
var pattern4 = /^\d{3}-\d{2}-\d{4}$/;
console.log(pattern3.test(text));
console.log(pattern4.test(text));
console.log(pattern4.test(text1));
// valueOf、toString
console.log(typeof pattern4.valueOf());
console.log(pattern4.valueOf() instanceof RegExp);
console.log(typeof pattern4.toString());
//多行匹配
console.log('>>> 多行匹配..');
var text2 = 'abc\n' + 'abc';
var pattern5 = /^a/g;
// m标志用于指定多行输入字符串应该被视为多个行。如果使用m标志，
// ^和$匹配的开始或结束输入字符串中的每一行，而不是整个字符串的开始或结束。
var pattern6 = /^a/mg;
var pattern7 = /a/g;
//不设置多行时，处理为单行行为
/*
[ 'a', index: 0, input: 'abc\nabc' ]
 */
while (true) {
    let match = pattern5.exec(text2);
    console.log(match);
    if (!match) {
        break;
    }
}
/*
[ 'a', index: 0, input: 'abc\nabc' ]
[ 'a', index: 4, input: 'abc\nabc' ]
 */
while (true) {
    let match = pattern6.exec(text2);
    console.log(match);
    if (!match) {
        break;
    }
}
/*
[ 'a', index: 0, input: 'abc\nabc' ]
[ 'a', index: 4, input: 'abc\nabc' ]
 */
while (true) {
    let match = pattern7.exec(text2);
    console.log(match);
    if (!match) {
        break;
    }
}
//正则字面量\n
console.log('>>> 正则字面量..');
var text = 'apple, orange, cherry, peach.';
var pattern = /apple(, )orange\1/g;
console.log(pattern.exec(text));
//string正则替换
console.log('>>> string replace..');
//$n标识匹配到的第n个捕获组
/*
, cherry, peach.
 */
console.log(text.replace(pattern, '$1'));
//$&表示匹配到整个字符串
/*
apple, orange, cherry, peach.
 */
console.log(text.replace(pattern, '$&'));
//另一个示例
//$n标识匹配到的第n个捕获组
var text = 'Apache Tomcat';
var pattern = /(\w+)\s(\w+)/;
console.log(text.replace(pattern, '$2 $1'));