// Classes

// In programming, “class” is a term used to define a group of elements that exhibit the same properties (very much like in natural language).
// The main 3 instantiation styles are: functional, pseudo-classical, and ES6.
// A sub-class has all the properties and methods of its parent class, plus other ones that are unique to it.
// Real classes have instances who are completely independent from each other.
// In JS this doesn’t exist when you use delegation, as modifying an object up the chain affects all objects that delegate to it.

// var sarah = {
//   age: 28,
//   howOld: function () {
//     console.log(`Hi, I am ${this.age}`);
//   }
// };

// var mark = {
//   age: 35,
//   howOld: function () {
//     console.log(`Hi, I am ${this.age}`);
//   }
// };

// // Dry -> Don't repeat yourself.
// sarah.howOld();
// mark.howOld();

function Person (age) {
  var res = {};
  res.age = age;
  res.howOld = function () {
    console.log(`Hi, I am ${this.age}`);
  }
  return res;
}

var Sarah = Person(28);
Sarah.howOld();
var Mark = Person(35);
Mark.howOld();

// Functional with shared methods.
// Class

function Phone (number) {
  var result = {};
  result.number = number;
  Object.assign(result, phoneMethods); // 
  return result;
};

var phoneMethods = {};
phoneMethods.dial = function (number) {
  console.log(`Your ${this.number} dialing : `, number);
};

var motorola = Phone(695323871);
console.log('motorola', motorola);
console.log('number', motorola.number);
console.log('dial', motorola.dial);
motorola.dial('123');

console.log();
console.log();

function SmartPhone (number, email) {
  var result = Phone(number);
  result.email = email;
  Object.assign(result, smartPhoneMethods);
  return result;
};

var smartPhoneMethods = {};
smartPhoneMethods.sendEmail = function (email) {
  console.log('Emailing', email);
};

var iPhone = SmartPhone(642503917, 'jack@apple.com');

console.log();
console.log();


// Class
// 신택틱 슈가
class phoneClass {
  constructor (number) {
    this.number = number;
  }
  dial (number) {
    console.log('Dialing', number);
  }
}
