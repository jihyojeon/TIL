## Async patterns
- In JavaScript there are mainly three patterns to do async operations: callbacks, promises, and async / await.
- Each promise comes with a resolve and reject function. What is resolved gets passed to the then statement, what is rejected gets passed to the catch statement.
- Async functions allow to use the keyword await on promises and write async code that looks as if it was synchronous.
- Promises use callbacks under the hood, and async functions use promises. - Both are “sugarcoating”, they offer a nicer interface but don’t add new functionality.

## Koa
- Is another Node JS framework, from the same team that created Express, with several improvements.
- It supports async functions in middleware.
- It bundles the request and response most commonly used methods in the ctx global variable.
- It provides a global error handler for all uncaught exceptions.
- It offers an assert() method, that allows to check conditions and if “falsy” stop the request handling, immediately sending a response with an associated HTTP status code and error message.