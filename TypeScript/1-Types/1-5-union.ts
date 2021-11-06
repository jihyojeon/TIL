{
  // Union types: OR
  type Direction = 'left' | 'right' | 'up' | 'down';

  function move(direction: Direction) {
    console.log(direction);
  }

  move('up');
  move('left');
  // 가능한 인자를 자동완성으로 보여줌!!!!

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16; // <- 하나만 할당할 수 있을 때!!
}

{
  // function: login -> success, fail
  type Success = {
    id: 'string';
    pwd: 'string';
  };
  type Fail = {
    reason: string;
  };
  type logInState = Success | Fail;
  // function logIn(): Promise<logInState> {
  //   return {
  //     response: {
  //       body: 'log in'
  //     }
  //   }
  // }

  function printLogInState(state: logInState) {
    // if ('response' in state) {
    //   console.log(`${state.response.body}`)
    // } else {
    //   console.log(`${state.reason}`)
    // }
  }
}
