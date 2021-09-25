// ESnext
// JavaScript is based on a standard, named “ECMAScript”. 에크마스크립트
// The standard keeps evolving: new language features are introduced (i.e. syntax and functionality), some can be removed.
// ES6 introduces some new interesting concepts, for example: let and const, arrow functions, default and trailing function parameters, the spread operator, template literals, enhanced object properties, modules (import / export), class definitions, symbols, maps / sets, and promises.


// ES6

// const and let

const BTN_COLOR = 'red';
let btnColor = 'red'; // camel case

const btn = {color: 'red'};
btn.color = 'blue'; // not reassign so 'btn' can be const

// Arrow Function
function sayHifunc (name) {
  !name ? name = 'There': name;
  console.log('Hi', name);
};

const sayHi = () => {
  console.log('Hi');
};

sayHifunc();
sayHifunc('Jihyo');

const arr = [1,2,3,4,5];
console.log(...arr);
console.log(1,2,3,4,5);

const main = {salad: 3};
const dessert = {icecream: 2};
//const menu = Object.assign(main, dessert);
//console.log(menu);
//console.log(main);
//console.log(dessert);
const menu2 = Object.assign({}, main, dessert); // 맨 앞에꺼에 args[1:]를 넣는거네
console.log(menu2);
console.log(main);
console.log(dessert);
const menu = {...main, ...dessert};
console.log(menu);
console.log(main);
console.log(dessert);

// Template reterals
// `test ${test}`

// Enhanced Object Properties
const colorr = 'red';
const btn = {
  // properties..
  colorr: colorr // repeating
};

const btn = {
  // properties..
  colorr // repeating
};

// Modules export