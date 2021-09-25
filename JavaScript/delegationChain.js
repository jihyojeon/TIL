// The delegation chain

// Properties lookup in JS objects follows a delegation “chain” (aka the “prototype chain”).
// To set a link in this chain when creating a new object use Object.create(parentObj).
// If a property lookup fails until the last step in the chain, undefined is returned.
// When a property is defined on an object down the chain, it “obfuscates” the same property in other objects up the chain.

let arr = [];
arr.push(3);
console.log(arr.hasOwnProperty('push')); // false
console.log(arr.hasOwnProperty); // [Function: hasOwnProperty]
console.log(Array.prototype.hasOwnProperty('push')); //true
console.log(arr.__proto__.hasOwnProperty('push')); //true

console.log(arr.__proto__); // Object(0) []
console.log(arr.__proto__ === Array.prototype); // true

console.log();
console.log();

var team = {learning: 'code'};
var student = Object.create(team);
student.name = 'Sara'
console.log(student.name); // Sara
console.log(student.learning); //code
console.log(student); // { name: 'Sara' }
console.log(student.__proto__); // { learning: 'code' }


// ----------------------------------------------------------


console.log();
console.log();
console.log();
console.log();

// 상속 관점에서 자바스크립트의 유일한 생성자는 객체뿐이다.
// 각각의 객체는 [[Prototype]]이라는 은닉(private) 속성을 가지는데 자신의 프로토타입이 되는 다른 객체를 가리킨다.
// 그 객체의 프로토타입 또한 프로토타입을 가지고 있고 이것이 반복되다, 결국 null을 프로토타입으로 가지는 오브젝트에서 끝난다.
// null은 더 이상의 프로토타입이 없다고 정의되며, 프로토타입 체인의 종점 역할을 한다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain


let f = function () {
  this.a = 1;
  this.b = 2;
}

// o라는 객체가 있고, 속성 'a' 와 'b'를 갖고 있다고 하자.
let o = new f(); // {a: 1, b: 2}

// f 함수의 prototype 속성 값들을 추가 하자.
console.log('+ f');
f.prototype.b = 3;
f.prototype.c = 4;
console.log(f.prototype);
console.log(f.prototype.prototype); // undefined
console.log(f.prototype.__proto__.prototype); // undefined
console.log(f.prototype.__proto__.__proto__); // null
console.log('o');
console.log(o);
console.log(o.prototype); // undefined
console.log(o.__proto__.prototype); // undefined
console.log(o.__proto__.__proto__); // null

// MotherObject.prototype.__proto__은 null이다.
console.log('- f');
f.prototype = {b:3, c:4};
console.log(f.prototype);
console.log(f.prototype.prototype); // undefined
console.log(f.prototype.__proto__.prototype); // undefined
console.log(f.prototype.__proto__.__proto__); // null
console.log('o');
console.log(o);
console.log(o.prototype); // undefined
console.log(o.__proto__.prototype); // undefined
console.log(o.__proto__.__proto__); // null

// f.prototype = {b: 3, c: 4}; 라고 하지 마라, 해당 코드는 prototype chain 을 망가뜨린다.

// o.[[Prototype]]은 속성 'b'와 'c'를 가지고 있다.
// o.[[Prototype]].[[Prototype]] 은 Object.prototype 이다.
// 마지막으로 o.[[Prototype]].[[Prototype]].[[Prototype]]은 null이다.
// null은 프로토타입의 종단을 말하며 정의에 의해서 추가 [[Prototype]]은 없다.
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log();

console.log(o.a); // 1
// o는 'a'라는 속성을 가지는가? 그렇다. 속성의 값은 1이다.

console.log(o.b); // 2
// o는 'b'라는 속성을 가지는가? 그렇다. 속성의 값은 2이다.
// 프로토타입 역시 'b'라는 속성을 가지지만 이 값은 쓰이지 않는다. 이것을 "속성의 가려짐(property shadowing)" 이라고 부른다.

console.log(o.c); // 4
// o는 'c'라는 속성을 가지는가? 아니다. 프로토타입을 확인해보자.
// o.[[Prototype]]은 'c'라는 속성을 가지는가? 가지고 값은 4이다.

console.log(o.d); // undefined
// o는 'd'라는 속성을 가지는가? 아니다. 프로토타입을 확인해보자.
// o.[[Prototype]]은 'd'라는 속성을 가지는가? 아니다. 다시 프로토타입을 확인해보자.
// o.[[Prototype]].[[Prototype]]은 null이다. 찾는 것을 그만두자.
// 속성이 발견되지 않았기 때문에 undefined를 반환한다.

