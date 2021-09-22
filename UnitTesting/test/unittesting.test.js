const assert = require('assert');

const capitalizedGreeting = require('../unittesting.js');

// Option 1
// if (capitalizedGreeting('Joe') !== 'Hello JOE!') {
//   throw new Error('Wrong output');
// } else {
//   console.log('Passed');
// };

// Option 2 with 'assert' <- 내장되어 있어서 항상 만들 필요 없음
// 아래와 같이 작동함
// function assert (condition) {
//   if (!condition) {
//     throw new Error();
//   }
// }

// 그냥 이렇게 쓰면 됨.
assert(capitalizedGreeting('Joe') === 'Hello JOE!');
console.log('Passed');

// Assertion Libraries
// assert(foo !== 'bar');
// expect(foo).to.not.equal('bar');
// foo.should.not.equal('bar');

// Testing Framework
// 1. Jest
// 2. Mocha
// 3. Chai

// TDD and BDD
// 1. Test Driven Development
// 
// 2. Behavior Deiven Development
//

// Code coverage: how much my code covers tests