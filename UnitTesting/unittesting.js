// # Unit Testing

// ### Automated tests
// * Can be divided into unit tests, integration tests, end-to-end tests
// * Improve code reliability, but reduce development speed in the short term

// ### Assertion styles and JS tools
// * Assertion styles (assert, expect, should)
// * Mocha, Chai, Jasmine, Jest

// ### TDD and BDD
// * In TDD you always start by implementing a test that fails, and then write the code to fix it, proceeding one test at a time
// * In BDD you test a list of expected inputs / outputs based on common use cases

function capitalizedGreeting (name) {
  // 1. Caplitalized
  name = name.toUpperCase();
  // 2. Add name to greeting string
  const greet = `Hello ${name}!`;
  return greet;
}

// console.log(capitalizedGreeting('Joe'));

// Automated Test: Unit > Integration > E2E
// Unit: [BEST] Check all egde cases

function currencyCalculator (amount, exchangeRate) {
  // test (20, 1.2) -> 24
  return amount * exchangeRate;
}

function currencyFormatter (amount) {
  // test (75.876323) -> 75.88
  return (Math.round(amount * 100) / 100).toFixed(2);
}

// 이 두 함수를 각각 테스트하는 것은 서로에게 영향을 주지 않기 때문에 유닛(단위) 테스트라고 할 수 있다.
// 두 개를 함께 체크하려면 인터그레이션 테스트
// 예. test (20, 1.2) -> 24.00 이렇게 나오게 해보자.

// 엔드투엔드 테스트 : 처음부터 끝까지 다 해보기.
// 근데 왜 바로 이걸 안하나? 어디서 에러가 발생하는지 알 수 없기 때문.
// 70 유닛 > 20 인터그레이션 > 10 엔투엔: 구글에서는 이런 비율로 하고 있음.

// 테스팅 장단점
// 안전성 reliability vs 빠른 개발

module.exports = capitalizedGreeting;


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
// - 무슨 테스트가 실패했나? most common use cases 먼저 보자. 그 다음에 엣지케이스
// - 테스트 -> 코딩 -> 테스트 -> 코딩 ... 
// - 테스트 케이스가 부족하면? 알지 못했던 에러가 나오고 이걸 커버하지 못 할 수도 있음.
// 2. Behavior Deiven Development

// Code coverage: how much my code covers tests
// 자동화된 테스트 꼭 있어야함. 하나라도 있는게 없는 것보다 낫다.
// 없으면? 디버깅에 너무 많은 시간을 소요할 수 있음.