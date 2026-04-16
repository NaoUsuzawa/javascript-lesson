// Q1
let nickname = 'Nao';
let age = 24;
let greet = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。';
console.log(greet);

// Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let sentence = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(sentence);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5
let ageAverage = (playerList[0].age + playerList[1].age + playerList[2].age) / playerList.length;
console.log(ageAverage);

// Q6
function sayHello() {
  console.log('Hello!');
}
sayHello();

const sayWorld = function() {
  console.log('World!');
}
sayWorld();

// Q7
user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('Hello!');
}
user.sayHello();

// Q8
let calc = {};
calc.add = function(x, y) {
  console.log(x + y);
}
calc.add(3, 4);

calc.subtract = function(x, y) {
  console.log(x - y);
}
calc.subtract(20, 10);

calc.multiply = function(x, y) {
  console.log(x * y);
}
calc.multiply(7, 7);

calc.divide = function(x, y) {
  console.log(x / y);
}
calc.divide(10, 2);

// Q9
function reminder(x, y) {
  return (x % y);
}
console.log(5 + 'を' + 3 + 'で割った余りは' + reminder(5, 3) + 'です。');

// Q10
function foo() {
  let x = 1;
}
console.log(x);
// 変数xは関数fooの中で定義されているため、そのスコープ内でしか参照できない。そのため、関数の外からはスコープ外となり参照できず、x is not definedとなる。
