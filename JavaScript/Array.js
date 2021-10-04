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

