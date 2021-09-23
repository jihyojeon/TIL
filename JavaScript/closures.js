// When keeps func scope after that func has returned

function generateAddConst (x) {
  return function (y) {
    return x + y;
  }
}

var addConst = generateAddConst(10);

console.log(addConst(20)); // 30
console.log(addConst(40)); // 50
console.log(generateAddConst(10)(40)); // 50
