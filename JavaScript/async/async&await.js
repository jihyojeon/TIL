// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() { // async라고 쓰면 프로미스로 바뀜.
  // do network reqeust in 10 secs....
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨ 
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000); // async안에서만 쓸 수 있다. 이거 끝날 때까지 기다려!
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() {
  const applePromise = getApple(); //프로미스를 만드는 순간 실행됨.
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 하지만 위는 좀 더럽다...?

// 3. useful APIs ✨
function pickAllFruits() {
  // 프로미스에 있는 all!!!
  // 모든 프로미스를 병렬적으로 사용한다.
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);