## Errors
- When an exception is “thrown”, if it’s not “caught”, it causes the execution to stop and exit with an error.
- If an exception is thrown inside of a try statement it gets passed to its catch part.
- try ... catch
- throw


## MVC
- [참고](https://jaeseongdev.github.io/development/2021/02/21/MVC_%ED%8C%A8%ED%84%B4/)
- 유지보수(maintenance)를 쉽게 해보자. -> 패턴의 등장.
- 패턴들은? 최소한의 코만을 수정해서 기능을 변경할 수 있음: >>변하는 것과 변하지 않는 것을 분리!<<
- 웹 비유
  1. user -> controller: google 'coding' to controller
  2. controller -> model: request result to model
  3. controller -> view: transfer response to view
  4. view -> user: show reponse with UI

- It means “model-view-controller”.
- It’s a web server design pattern that aims at improving modularity and separation of concerns.
- Each request is passed to its corresponding controller, which is like the “traffic director” of the required operations for that request.
- The model represents your data.
- The view is a template that when filled with data generates the final render, and represents what the user will see in terms of UI.
- The controller “interacts” with the model and the view as necessary, and then sends the response.

## 이것만 지키자!!
- Model : 데이터 <-> DB와 연결되어 있을수도 있음.
  - Model은 Controller와 View에 의존하지 않아야한다.
  `= Model 클래스 내부에 특정 Controller 클래스의 코드와 특정 View 클래스의 코드가 있으면 안 된다.`
- View : 사용자한테 보여주는 부분 + 데이터
  - View는 Model에만 의존해야하고, Controller에는 의존하면 안 된다.
  `= View 클래스 내부에 Model 클래스의 코드만 있고, 특정 Controller 클래스의 코드가 있으면 안 된다.`
  - View가 Model로부터 데이터를 받을 때에는 직접 받으면 안 되고, Controller를 통해서 받아야 한다.
  - View가 Model로부터 데이터를 받을 때는, 사용자마다 다르게 보여주어야 하는 데이터에 대해서만 받는다.
- Controller : Model과 View를 활용해 전체 로직을 작성하는 곳
  - Controller는 Model과 View에 의존한다.
  `= Controller 클래스 내부에 Model 클래스, Controller의 클래스의 코드가 있다.`
  - Controller는 Model의 데이터를 받아서 View로 전달해주어야 한다.


## Express
- Node JS framework to simplify a web server setup
- Provides chainable middleware in the form of app.use(), which accepts handler callbacks that get passed the request and response object of each HTTP transaction, together with a next() callback to move to the next middleware in the chain.
- Augments Node’s req and res objects.
- Offers a Router class to easily create routes.

## - 
데브 / 배포에 필요한 패키지들 분리.
```
npm i nodemon --save-dev 
```