console.log('Hello World');

const test: string = 'Hello';
console.log(test);

// tsc main.ts <- 컴파일러
// 를 실행하면 main.js가 생성되고
// node main.js 를 사용할 수 있다.
// tsc main.ts -w를 하면 터미널이 계속 살아있고 js파일이
// 자동으로 업데이트 됨.

// ts-node main.ts
// 를 실행하면 js파일 생성을 내부적으로 하고 간편하게 확인하능.
