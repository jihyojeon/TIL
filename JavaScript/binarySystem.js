// Binary system and floating point numbers

// Why don’t my numbers add up?
// So you’ve written some absurdly simple code, say for example:
// 	0.1 + 0.2
// and got a really unexpected result:
// 	0.30000000000000004
// https://floating-point-gui.de/

// because it is in binary system...?

function addCommission (amount) {
  return amount * 1.05;
}

function addTax (amount) {
  return amount * 1.2;
}

console.log(0.1 + 0.2);

var price = 0.1 + 0.2;
console.log(price);

result = addCommission(price);
console.log(result);

result = price * 100;
result = addCommission(result);
result = result / 100;
console.log(result);

result = addTax(price);
console.log(result);

result = price * 100;
result = addTax(result);
result = result / 100;
console.log(result);
