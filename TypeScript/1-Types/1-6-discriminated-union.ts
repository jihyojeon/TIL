{
  // function: login -> success, fail
  type Success = {
    result: true;
    response: {
      body: string;
    };
  };
  type Fail = {
    result: false;
    reason: string;
  };
  type logInState = Success | Fail;
  function logIn(): Promise<logInState> {
    // return {
    //   result: true,
    //   response: {
    //     body: 'log in',
    //   },
    // };
  }

  function printLogInState(state: logInState) {
    // if (state.result) {
    //   console.log(`${state.response.body}`)
    // } else {
    //   console.log(`${state.reason}`)
    // }
  }
}
