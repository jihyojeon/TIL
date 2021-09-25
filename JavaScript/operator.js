// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
// ?
console.log(2 == '2.00') // true
console.log('2' === 2.00) // false


// 2. Numeric Operations
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(parseInt(1 / 1)); // 몫
console.log(1 % 1); // 나머지
console.log(1 ** 1); // 지수곱


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter += 1;
// preIncrement = counter;
const postIncrement = counter++;
// postIncrement = counter;
// counter += 1;

// 6. Logical Operators: || (or), && (and), ! (not)
// or 연산자를 쓸 때 계산 많이 하는 걸 제일 뒤에 쓰자.
// and 도
// nullableObject && nullableObject.something;
// 이것은 아래와 같다.
// if (nullableObject != null) {
//   nullableObject.something;
// }
console.log();
let a = {};
a.test = function () { console.log('test') };
a && a.test();

let b = {value:'?'};
b.test = function () { console.log('test') };
b && b.test();

// == loose equality, with type conversion
// === strict equality, no type conversion
// object equality by reference
// 오브젝트는 값을 비교하지 않고 레퍼런스만 비교!!!
// 오브젝트끼리 값이 같더라도 딥클론 되었으면 다름!
// 오브젝트끼리 값이 같더라도 주소가 다르면 다름!!
// 오브젝트끼리 얕은 클론 되었으면 같음!!

// 9. Ternary operator: ?
// condition ? value1 : value2 ;
const name1 = 'ellie';
console.log(name1 === 'ellie' ? 'yes' : 'no');
const name2 = 'jihyo';
console.log(name2 === 'ellie' ? 'yes' : 'no');

// Switch
const brower = 'IE';
switch (brower) {
  case 'IE':
    console.log();
    break;
  case 'Chrome':
  case 'FireFox': // 크롬이랑 파폭 둘이 같을 때 
    console.log('!');
    break;
  default:
    console.log('?');
    break;
}

