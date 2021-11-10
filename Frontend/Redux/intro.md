props로 계속 계속 아래로 보내지 말고 store에서 바로 바로 꺼내쓰자!!!

## Actions

- Actions are payloads of information that send data to the store.
- Must have a type property and are sent when through store.dispatch().

## Reducers

- A “reducer” is a pure function that receives the current state and the incoming action, and returns the new state.
- Every time you want to change a part of the state, you create a copy of it (typically using the spread operator) and reassign the required properties (i.e. with a non-mutating operation).

## The store

- Is created through the createStore() method, passing in a reducer.
- Allows access to the state via getState().
- Allows state to be updated via dispatch(action).
- Registers listeners via subscribe(listener).

## Connecting to components

- You connect a component to the Redux store using connect(mapStateToProps, mapDispatchToProps)(Component).
- mapStateToProps() is a function that you need to define, which takes the state as an argument and returns an object, where the keys contain the props you want to connect, and the values are the state parts that you want to map to them.
- mapDispatchToProps is an object containing the action creators, where each action creator will be turned into a prop function that automatically dispatches its action when called.
