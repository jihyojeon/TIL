{
  // JS !! 💩 !!
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // TS 👍
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }
  console.log(tsAdd(1, 2));
}

{
  // JS
  // function jsFetchNun(id) {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // TS
  function tsFetchNun(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
}

{
  // Optional Parameter
  function printName(first: string, last?: string) {
    console.log(first);
    last ? console.log(last) : null;
  }

  printName('Jihyo', 'Jeon');
  printName('Jihyo');

  // Default Parmaneter
  function printMsg(msg: string = 'default msg') {
    console.log(msg);
  }

  printMsg();

  // Rest Parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
}
