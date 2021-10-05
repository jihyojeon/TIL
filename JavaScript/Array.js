'use strict';

// Array
// Looping
// 1. for loop
// 2. for of
// 3. foreach
let arr = [1,2,3];
arr.forEach(el => console.log(el));
arr.forEach((el, index) => console.log(index));
arr.forEach(function(el, index, array){
  console.log(el, index, array);
})

// 4. Addition, Deletion, Copy
// push
// pop
// shift
// unshift
// [!] shift and unshift are slower than pop, push!!!!
// 왜냐? 어레이는 스택이거든....
// remove and item by index position: splice
arr.splice(1, 1, 'new'); // 교체
console.log(arr);

//indexOf 
//includes
//lastIndexOf 대박.... 같은 값 있을 때 제일 뒤에 있는 인덱스 구해줌...