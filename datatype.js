// 입력, 연산, 출력! = 프로그래밍
// + 전송?

// 생각해보자.
// 1. cpu 최적화
// 2. memory 최소화

'use strict'; //<- 바닐라 자바스크립트를 이용할 것이라는 뜻

// Variables

// 1
// let : added in ES6
// Global scope
let globalName = 'global'; // 어느 곳에서나 접근 가능

{ // scope
  let name = 'Jihyo'; // 여기서만 접근 가능
}

// 2
// var <- 쓰지마!!!!! DON'T EVER USE THIS!!!!
// var hoisting (move declaration from where it is to top)
// 선언을 끌어올려주다.
// has so block scope... 어디에서나 보인다;;
age = 4;
var age; 


// 3. Constants
// const
// favor immutable data type always for a few reasons
// 절대, 다시는 값을 변경할 수 없다!!! IMMUTABLE
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;


// 4. Variable types
// primitive type, single item: number, string, boolean, undefined, symbol
// object, box contatiner
// function, first-class function: 함수도 다른 변수에 할당할 수 있다. <- 이거.. 콜백?

// PRIMITIVE
// (1) number: numeric values
const num1 = 1; // integer -> number
const num2 = 1.2; // decimal -> also number!
// Check followings before use Number!
const infinity = 1/0; // Infinity
const negativeIntifity = -1/0; // -Infinity
const nAn = 'not a number' // NaN

// (2) string
const char = 'c';
const brenden = 'brenden';
const greeting = 'hello' + brenden;
const helloBob = `hi ${brenden}!`; // template literals(string)

// (3) boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true; // true
const test = 3 < 1; // false

// (4) null
let nothing = null; // assigned with null

// (5) undefined
let x; // not assigned yet
let y = undefined; // not assigned yet

// (6) symbol, create unique identifiers for objects
// 주어지는 스트링이 같아도 다르게 만들어짐! 고유한 식별자를 만들 때 사용됨.
// 이거 대체 언제 쓰는 걸까??
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const Ssymbol1 = Symbol.for('id');
const Ssymbol2 = Symbol.for('id');
console.log(Ssymbol1 === Ssymbol2); // true
// symbol을 출력할 때는 description을 사용한다.
console.log(`value:${symbol1.description}`)


// 5. Dynamic Typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`${typeof text}`); //string
text = 1;
console.log(`${typeof text}`); //number
text = '7' + 1;
console.log(`${text} ${typeof text}`); //71 string
text = '7' / '1';
console.log(`${text} ${typeof text}`); //7 number
console.log(text.charAt(0)); // ERROR! 
// 자바스크립트는 런타임에서 타입을 정의...
// 이거 귀찮은데? 여기서 타입스크립트가 나오게 됩니다...
