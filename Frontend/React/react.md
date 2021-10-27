## Components

- 데이터를 입력받아 화면에 표시할 내용을 반환하는 역할
- Can be classes or functions that contain logic and return JSX syntax.
- JSX is a superset of JavaScript and HTML that React compiles to JavaScript and renders as HTML elements in the browser.

## Props and state

- this.props은 입력데이터 다루기.
- this.state는 내부 상태 데이터
- React allows to pass data from a parent component to its children through “props”, which are made of a key and value pair, and are similar to HTML attributes.

-Class components can have an internal “state” which is an object that contains data that is local to the component.
You can access the state in a class component with this.state.<propertyName> and update any value by using the this.setState() function (never directly modify the state object).

- Whenever you update the state in a component, React re-renders that element in the browser.

## Conditionals and lists

- Since JSX is a superset of JS, you can use conditional logic to show different data in the browser based on certain conditions (e.g. through if...else statements or ternary operators).
- If you have an array of data, and need to render each element in a separate component of the same type, you can use the map() function to programmatically generate the required JSX syntax.

## Handling events

- React provides several built-in JSX attributes that allow you to handle events by assigning a callback function to them (e.g. onChange for an input, or onClick for a button).
- You can also utilize events to pass data up the component tree from child to parent, by providing a handler function from the parent and assigning it via props on the desired event in the child.

## Hook

```JavaScript
// useState
const [counter, setCounter] = useState(0);
// useEffect
useEffect(() => {
  console.log(counter)
  return () => // Teardown logic (executes after the first render and anytime the counter updates)
}, [counter]);
```
