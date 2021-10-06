// 1
// log level
console.log('log'); // 개발 <- 배포 시 삭제
console.info('info'); // 정보 <- 배포 시 삭제
console.warn('warn'); // 경고
console.error('error'); // 에러! 예상하지 못한 에러, 시스템 에러.

// 2
// assert
// 특정한 조건이 만족될 때만 출력되게 만들 수 있다?
console.assert(2===3, 'not same!'); // 얘는 false이므로 출력됨.
console.assert(2===2, 'same!'); // 얘는 true이므로 출력 안됨.

// 3
// print object
const dog = {type:'🐶', name: 'Choco', owner: {name: 'Jihyo'}};
console.table(dog);
console.dir(dog, {depth: 0}); // { type: '🐶', name: 'Choco', owner: [Object] }

// 4
// measuring time
console.time('for loop');
for (let i=0; i<10; i++) {
  i++;
}
console.timeEnd('for loop'); // for loop: 0.051ms

// 5
// counting
function a() {
  console.count('a function');
}

a(); // 1
a(); // 2
a(); // 3
console.countReset('a function');
a(); // 1

// 6
// trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.trace(); // at f3.. at f2... at f1... 의 정보를 알 수 있음.
}

f1();
