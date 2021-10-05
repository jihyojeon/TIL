# Pro-tips

## Converts object to boolean
```JavaScript
Set.prototype.contains = function (value) {
  return !!this[value];
};
```

## Ternary Operator
```JavaScript
// ❌ Bad Code 💩
function getResult(score) {
  let result;
  if (score > 5) {
    result = '👍';
  } else if (score <= 5) {
    result = '👎';
  }
  return result;
}

// ✅ Good Code ✨
function getResult(score) {
  return score > 5 ? '👍' : '👎';
}
```

## Nullish coalescing operator
leftexpr ?? rightexpr

```JavaScript
// ❌ Bad Code 💩
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to display 😜';
  }
  console.log(message);
}

// ✅ Good Code ✨
function printMessage(text) {
  const message = text ?? 'Nothing to display 😜';
  console.log(message); // undefined, null 모두 nothing to display로 출력됨.
}

// 🚨 Default parameter is only for undefined
function printMessage(text = 'Nothing to display 😜') {
  console.log(text); // undefined는 nothing to display로 출력되지만, null은 null로 출력됨!!!
}

// 🚨 Logical OR operator ||
function printMessage(text) {
  const message = text || 'Nothing to display 😜';
  console.log(message); //  text가 거짓인 경우, false, 0, -0, NaN, '', ``, "" 모두 Nothing to display로 출력됨!!!!
}
```
```JavaScript
function getInitialState() {
  return null;
}
function fetchFromServer() {
  return 'Hiya from 💻';
}

const result = getInitialState() ?? fetchFromServer();

console.log(result); // 이렇게 함수 결과값을 어사인할 때도 사용할 수 있음!
```

## Object Destructuring
```JavaScript
const person = {
  name: 'Julia',
  age: 20,
  phone: '0107777777',
};

// ❌ Bad Code 💩
function displayPerson(person) {
  displayAvatar(person.name);
  displayName(person.name);
  displayProfile(person.name, person.age);
}

// ❌ Bad Code 💩
function displayPerson(person) {
  // local var을 이용한 방법...
  const name = person.name;
  const age = person.age;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// ✅ Good Code ✨
function displayPerson(person) {
  const { name, age } = person; // 키와 동일한 이름으로 설정하게 되면 오브젝트에 있는 것들이 자동으로 할당되어짐.
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}
```

## Spread Syntax - Object
Spread Syntax는 array 뿐만 아니라, object에도 사용할 수 있다!
그리고 mutate도 훨씬 쉽다!

```JavaScript
const item = { type: '👔', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

// ❌ Bad Code 💩
item['price'] = detail.price; // manually 
// 하지만 오브젝트를 mutation하는 것은 좋지 않다.❌

// ❌ Bad Code 💩
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;

// ❌ Bad Code 💩
const newObject2 = {
  type: item.type,
  size: item.size,
  price: detail.price,
  made: detail.made,
  gender: detail.gender,
};

// ✅ Good Code ✨
const shirt0 = Object.assign(item, detail);

// ✅ Better! Code ✨
const shirt1 = { ...item, ...detail}; // 이렇게 하면 object assign과 같은 결과를 얻을 수 있고,
const shirt = { ...item, ...detail, price: 30 }; // 이렇게 overwrite할 것도 바로 추가해줄 수 있음.
```

```JavaScript
let arr = ['apple', 'banana', 'orange'];
// push
arr = [...arr, 'newitem'];
// unshift
arr = ['newitem', ...arr]
```

## Optional Chaining
```JavaScript
const bob = {
  name: 'Julia',
  age: 20,
};
const anna = {
  name: 'Julia',
  age: 20,
  job: {
    title: 'Software Engineer',
  },
};

// ❌ Bad Code 💩
function displayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

// ✅ Good Code ✨
function displayJobTitle(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

// ✅ Good Code ✨
function displayJobTitle(person) {
  const title = person.job?.title ?? 'No Job Yet 🔥';
  console.log(title);
}
```

## Loops
```JavaScript
// Looping
const items = [1, 2, 3, 4, 5, 6];

// ❌ Bad Code 💩
function getAllEvens(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result;
}

function multiplyByFour(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(items[i] * 4);
  }
  return result;
}

function sumArray(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i];
  }
  return sum;
}

const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

// ✅ Good Code ✨
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// ✅ Good Code ✨
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result);
```