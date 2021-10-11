function add(num1, num2) {
  return num1 + num2;
}

function surprise(callback) {
  const result = callback(2, 3);
  console.log(result);
}

surprise(add); // 5

function divide(num1, num2) {
  return num1 / num2;
}

surprise(divide); // 0.6666666....


// --------------------------------------------


class Counter {
  constructor(callback) { // optional 지정을 할 수 없기 때문에... increase에 this.callback && 추가함
      this.counter = 0;
      this.callback = callback;
    }

  increase() { // 'function' 생략가능
      this.counter++;
      console.log(this.counter);
      if (this.counter % 5 === 0) {
          this.callback && this.callback(this.counter);
      }
  }
}

function printYO(num) {
  console.log('Yo!',num);
}

const coolCounter = new Counter(printYO);
coolCounter.increase(); // 1
coolCounter.increase(); // 2
coolCounter.increase(); // 3
coolCounter.increase(); // 4
coolCounter.increase(); // 5 
                        // Yo! 5

// Class의 재사용성을 위해 callback 함수를 사용하는 것임,,,