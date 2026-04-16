// alert('Hello World!');
console.log('Hello World!');

// 1 変数
// let text = 'JavaScriptの練習';
// console.log(text);

// 変数の再代入
// text = 'JavaScriptをマスターした';
// console.log(text);

// 処理①
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

// 処理②
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

console.log(23);

let age = 23;
console.log(age);

// let 再定義はできない
let testText;
console.log(testText);

let again = '定義しました';
again = '再代入はできます';
// let again = '再定義します';

//let 以外の変数宣言
const constant = 'これは定数です';
// constant = '再代入できません。';

// 2 データ型
let string = 'JavaScriptの練習';
console.log(string);

//文字列型(string 型)
let single = '文字列型です';
console.log(single);

let double = "英語だとstringといいます。";
console.log(double);

console.log('elephant');
// console.log(elephant); //エラー

console.log('elephant'); // => elephant が出力される
// console.log(elephant);

//文字列型でできる操作
let name = 'ジョニー';
let greet = '私は' + name + '!';
console.log(greet);

// テンプレートリテラル
let template = 'テンプレートリテラル'; // ※ これは文字列
let templateText = `これが${template}です。
${template}は改行もできます。`; // これはテンプレートリテラル
console.log(templateText);

//数値型(number 型)
let numTen = 10;
let strTen = '10';
console.log(numTen, strTen);

let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);

// 加算,減算,乗算,除算
let num1 = 25;
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// let number = 5;
// number += 3; // number = number + 3と同じ
// console.log(number);
// // 以下を追記
// number -= 1; // number = number - 1と同じ
// console.log(number);
// number *= 5; // number = number * 5と同じ
// console.log(number);
// number /= 7; // number = number / 7と同じ
// console.log(number);

//インクリメント（1 を足す）
let increment = 0;
console.log(increment);
increment++; // increment += 1と同じ
console.log(increment);

//デクリメント（1 を引く）
let decrement = 10;
console.log(decrement);
decrement--; // decrement -= 1と同じ
console.log(decrement);

//剰余（割った余り）
let bigNum = 25;
let smallNum = 2;

console.log(bigNum % smallNum); // 25 / 2 = 12 あまり 1 なので1が表示される

//累乗
console.log(bigNum ** smallNum);

let stringNum1 = '25';
let stringNum2 = '2';

console.log(stringNum1 + stringNum2);

let stringNum = '25';
let numberNum = 2;

console.log(stringNum + numberNum);

//配列型(array 型)
let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log(names);

console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

let emptyNames = [];

emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);

//　オブジェクト型(object 型)
// let John = ['John', '26', 'A', 'card'];

// let John = {
//   name: 'John', // key（キー）: value（バリュー）
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
// };

// console.log(John.bloodType); // => A

let Andy = {};

Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';

//配列とオブジェクトの使い分け
let fruits = ['apple', 'banana', 'grape'];

let apple = {
  color: 'red',
  shape: 'round',
  taste: 'wonderful',
};

let vehicles = [
  { name: 'car', color: 'red', speed: 'normal' },
  { name: 'train', color: 'green', speed: 'fast' },
  { name: 'airplane', color: 'grey', speed: 'faster' },
];

//なぜデータ型が大事なのか？
let one = '1';
let two = 2;

console.log('one →', typeof one, one); // one → string 1
console.log('two →', typeof two, two); // one → number 2

//
//　3 関数
function getArea() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}
getArea();
getArea();
getArea();

//引数
function getArea(radius) {
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea(5);
getArea(6);
getArea(10);

//返り値
function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;
}

console.log('円の面積は' + getArea(5) + 'です');
console.log('この円の面積はなんと' + getArea(10) + 'でござんす');

function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;

  console.log('ここはreturnよりも後ろの処理です。');
}

getArea(5);

function devide(x, y) {
  // 数学的に0で割ることはできないので、その条件の時だけ処理を止める
  if (y === 0) {
    return;
  }
  return x / y;
}

//関数の定義方法
function define1() { // define1という名前の関数
  return 'This is console in showConsole function!';
}

const define2 = function() { // 名前のない関数（無名関数）を変数define2に代入
  return 'This is console in showConsole function!';
}

//コールバック関数
function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

function output() {
  console.log('コールバック関数が呼び出されました');
}

doFunc(output)

//オブジェクトに関数を持たせる
let John = {
  name: 'John',  // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};

John.sing(); 

//標準組み込みオブジェクト
let round = Math.round(2.86); // 四捨五入
console.log('round => ', round);

let ceil = Math.ceil(4.05);   // 切り上げ
console.log('ceil => ', ceil);

let floor = Math.floor(4.98); // 切り下げ
console.log('floor => ', floor);

let random = Math.random(); // 0~1までの乱数の生成
console.log('random => ', random);

//スコープ
let userAge = 0;  // 変数の定義を関数の外で行う
myFunc();

function myFunc() {
  userAge = 27;  // ここは再代入するように変更
  console.log(userAge); // => 27がConsoleに表示される
}

console.log(userAge); // => 27がConsoleに表示される

// 4 条件分岐
let value1 = true;
let value2 = false;

if (false) {
  console.log('trueです！');
}
console.log('処理が終わりました');

//比較演算子
let tall = 185;
if (tall >= 180) {
  console.log('高身長です');
}

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');

let signal = 'red';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'blue') {
  console.log('青信号です。進みましょう');
} else if (signal === 'yellow') {
  console.log('黄色信号です。空気を読みましょう');
}

let myAge = 60;
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
} else {
  console.log('子供です');
}

// 論理演算子
let loto = 8;

if (loto === 7 || loto === 8) {
  console.log('当たり');
} else {
  console.log('ハズレ');
}

let numVal = 8;
let strVal = 'text'

console.log(numVal === 7 || strVal === 'text');


let userA = '到着';
let userB = '不在';

if (userA === '到着' && userB === '到着') {
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
}

console.log(userA === '到着' && userB === '到着');

//三項演算子
let errMsg = '';

// if 文を使った書き方
if (errMsg === '') {
    console.log('ない！');
} else {
    console.log('ある！');
}

// 三項演算子を使った書き方
errMsg === '' ? console.log('ない！') : console.log('ある！');

let number = 1;

// numberを2で割った時
// 割り切れたら「偶数です」、割り切れなかったら「奇数です」
// という文字列をtextに代入する
let text = number % 2 === 0 ? '偶数です' : '奇数です';
console.log(text); // 奇数です

//Truthy (真値) と Falsy (偽値)
if (1) {
    console.log('hoge');
}

if (0) {
    console.log('piyo');
}

// 5 繰り返し処理(for文)
for (let i = 0; i < 10; i++) {
  console.log(i + '回目のコンソール');
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);