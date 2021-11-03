{
  // JavaScript ES6 <- 👍👍
  // let
  let name = 'hello';
  console.log(name);
  name = 'world';
  console.log(name);
  //const
  const c = 2;
  console.log(c);
}

{
  // JS
  // Primitive: Number, String, Boolean, BigInt, Symbol, Null, Undefined
  // Object: function, array ...

  // TS
  // 1. Number
  const num: number = 1;
  console.log(num);

  // 2. String
  const str: string = 'hello';
  console.log(str);

  // 3. Boolean
  const bool: boolean = true;
  console.log(bool);

  // 4. undefined
  let age: number | undefined;
  console.log(age); // undefined
  age = 20;
  console.log(age); // 20

  // 5. null
  let person: string | null = null;
  console.log(person);
  person = 'Jihyo';
  console.log(person);

  // 6. unknown
  // !! 💩 !!
  let notSure: unknown = 0;
  notSure = 'test';
  notSure = true;

  // 7. any
  // !! 💩 !!
  let anything: any = 0;
  anything = 'test';

  // 8. void
  // return nothing
  function myPrint(): void {
    console.log('hello');
  }

  // 9. never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    // or
    // while(true)
  }

  // 10. Object
  let obj: object; // !! 💩 !!
  function accecptObj(obj: Object) {
    console.log(obj);
  }
  accecptObj({ name: 'Jihyo' });
}
