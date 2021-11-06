{
  // type Inference
  let text = 'test';
  text = 'hi';
  // text = 5 <- error!

  function print(message) {
    // 자동으로 any가 됩니다.
    console.log(message);
  }

  print('hello');
  print(3);

  function add(x: number, y: number) {
    // 알아서 리턴값을 number라고 생각함.
    return x + y;
  }

  const result = add(1, 2); // 얘도 자동으로 number가 됨.

  // 이렇게 추론하는게 좋을까?
  // 흠 함수가 복잡해지면 아닐수도,,,
  // 최대한 타입을 명시해주자.
  // 물론 보이드라면 생략할 수 있음.
}
