// context
// a programming convenience, and in JS it’s assigned to the variable [this].
// [this] is a binding that is made when a function is invoked, and what it references to is determined entirely by the call-site of the function, according to some rules.

// class? <- several objs with same methods.

function speedUp (context, increase) {
  console.log(context.speed + increase);
};

var car = {speed: 55};
var car2 = {speed: 70};

speedUp(car, 10); // 65
speedUp(car2, 20); // 90
// 당연히 본래 값을 건드리지 않고 프린트만 하는 것을 알 수 있다.
speedUp(car, 10); // 65
speedUp(car2, 20); // 90

var car3 = {
  speed: 55,
  speedUp: function (increase) {
    console.log(this.speed + increase);
  }
};

// Common invocation
speedUp(car3, 10); // 65
// What really is
car3.speedUp.call(car3, 10); // 65

// 다른 obj에게도 적용해보기
car3.speedUp.call(car, 10); // 65
car3.speedUp.call(car2, 10); // 80

// The thing to the left of the dot at call-site!

function speedUpThis (increase) {
  console.log(this.speed + increase);
};

car.speedUpThis = speedUpThis;
car2.speedUpThis = speedUpThis;
// car.speedUpThis = car2.speedUpThis = speedUpThis;

console.log('call-site check 1')
car.speedUpThis(10); //65
car2.speedUpThis(20); //90

console.log('call-site check 2')
var mark = {age: 23};
var sarah = {
  age: 27,
  brother: mark
};

function howOld () {
  console.log(this.age);
}

mark.howOld = sarah.howOld = howOld;
sarah.brother.howOld(); // 23

// Standalone
// global obj or undefined if in 'strict mode'
console.log('call-site check 3')

function logContext () {
  console.log(this);
}

logContext();

console.log('call-site check 4')

var name = 'Sarah';

function hi () {
  console.log(this.name);
}

hi(); // Node: undefined, Browser: Sarah

console.log('call-site check 5')

setTimeout(function logContext () {
  console.log(this);
}, 10000); // -> global object

function logContext () {
  console.log(this);
}

logContext.call(null); // -> global object