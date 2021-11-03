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
