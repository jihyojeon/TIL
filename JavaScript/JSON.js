// https://www.youtube.com/watch?v=FN_D4Ihs3LE&t=250s
// Server Communication.

// HTTP : Hypertext(all resources) Transfer Protocol
// Client <-> Server
// Client  -> Server : Request
// Client <-  Server : Response

// How to get the data from server?
// AJAX : Asynchronous JavaScript And XML
// ex. XHR (XMLHttpRequest)
// ex. fetch() API <- new! IE(X)
// XML?: Markup Langauge

// JSON! : JS Object Notation
// 1. Simplest data interchange format
// 2. lightweight text-based structure
// 3. easy to read
// 4. key-value pairs
// 5. used for serialization and transmission of data between the network the network connection
// 6. independent programming language and platform [!!!!]
// How to serialize? Obj -> JSON
// JSON.stringify(obj)
// How to deserialize? JSON -> Obj
// JSON.parse(json)

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());