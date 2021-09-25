// It limits potentially harmful language features.
// It’s a scope-wide declaration that is activated inserting 'use strict'; as the first code statement.
// It’s good practice to use it, unless you have a specific reason not to.
// Guarantees some engine optimizations (i.e. makes your code run faster).
// It’s activated by default when using ES6 modules and classes.

// practice
// var name = 'Laura';

// console.log(name.length);
// name.length = 3; // not effected
// console.log(name.length);

'use strict';  // <- 바닐라 자바스크립트를 이용할 것이라는 뜻

var name2 = 'Laura'; // 이거는 글로벌로 만드는 것. 의도하지 않았어도 그렇게 됨.

console.log(name2.length);
name2.length = 3; // ERROR: TypeError: Cannot assign to read only property 'length' of string 'Laura'
console.log(name2.length);

// 에러를 준다는 점에서 디버깅이 쉽다.