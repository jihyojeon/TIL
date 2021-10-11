// PROMISE
// Object: 비동기를 도와주는 내장오브젝트임!

// callback을 쓰지 않고 promise를 써서 해보자.

'use strict';

// Promise is a JS object for asynchronous operation.
// 1. State: pending -> fulfilled or rejected
// 2. Producer vs Consumer

// Producer
// 프로미스를 만드는 순간... 엑시큐터가 바로 실행되기 때문에!!!
// When new Promise is created, the executor runs automarically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  console.log('doing something...');
  setTimeout(()=>{
    resolve('ellie'); // 성공적으로 받아온 데이터를 resolve를 통해서 전달하면 됨.
    // reject(new Error('no network'));
  }, 2000);
});

// Consumer
promise
  .then(value => {
  // 프로미스가 잘 수행이 되어서 resolve로 전달하면 then의 파라미터로 들어오게 됨.
    console.log(value);
  })
  .catch(error => {
  // 리젝트 되면 캐치를 호출하게 됨.
    console.log(error);
  })
  .finally(()=>{
  // 리젝, 리졸브 상관없이 마지막에 실행됨.
    console.log('finally');
  });


// 3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve(1);
  }, 1000);
});

fetchNumber
  .then(num => num*2)
  .then(num => num*3)
  .then(num => { // 값을 전달해도 되고, 프로미스를 전달해도 됨.
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(num-1)
      }, 1000);
    });
  })
  .then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    // reject -> new Error!
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg) // hen => getEgg(hen) 과 같음.
  .catch(error => {
    return '🍞';
  })
  .then(cook)
  .then(console.log) // console.log(meal)
  .catch(console.log); // error handling. reject 발생시 이것 실행.
