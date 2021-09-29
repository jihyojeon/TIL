'use strict'
// Object-oriented programming
// object: instance of a class
// JavaScript classes
// - Introduced in ES6
// - Syntactical sugar over prototype-base inferitance

// 1. Class Declarations
class Person {
  // Constructor
  constructor (name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // Methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const Ellie = new Person('Ellie', 20);
// console.log(Ellie.name, Ellie.age); // Ellie 20
// Ellie.speak(); // Ellie: hello!


// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
// console.log(user1.age); // -1


// 3. Fields (public, private)
// 너무 최근 업데이트라서 사람들 많이 사용하지는 않음,,,
// 아니 ㅋㅋㅋ 어떤 브라우저에서도 지원안되자나 ㅋㅋㅋ 

class Experiment {
  // Constructor 없이 사용 가능
  publicField = 2; // 아무것도 안 붙이면 퍼블릭.
  #privateField = 0; // 해쉬 기호를 붙이면 프라이빗.
}

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// 최근 업데이트
// static을 이용해서 모두가 공유하는 값을 만든다.
// 걍 컨스트럭터에 넣어도 되지 않나?

class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // undefined
Article.printPublisher; // Dream coding