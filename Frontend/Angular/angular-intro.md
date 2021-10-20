# Angular

- 완전한 프레임 워크로, 프로젝트의 생성, 테스트, 빌드, 배포 기능 제공.
- TypeScript 사용
- Angular CLI
- 모듈과 컴포넌트 기반

! 단일 페이지 애플리케이션 (SPA, Single Page Application)을 위한 프레임워크
! Server Side Rendering 기능 구비!

## Single page applications

- SPAs use JavaScript to update the content of a single web page, fetching the required data from the server API, instead of fetching the rendered HTML of different pages.
- SPAs initially need more time to load all the required scripts and render the content, but offer a more responsive UX from that moment onwards.

## TypeScript

- 자바스크립트가 동작하는 어떤 곳에서든 사용 가능!
- 클라이언트/ 서버 사이드
- 컴파일러 바벨 사용 가능!
- TypeScript is a strongly typed superset of JavaScript.
- TypeScript needs to be compiled to JavaScript to be executed.
- A strongly typed code environment is more reliable and less prone to bugs.
- Angular is written in TypeScript, however TS is not directly linked to Angular and can be used separately.

## Components

- Components are the building blocks of an Angular app, where each one represents a portion of the view, and is made of HTML, CSS and TypeScript.
- By switching out components, we can produce interactive UIs and simulate page changes.

## Data and event binding

- Angular offers a special syntax to bind variables to DOM properties, or functions to events (e.g. click, or change).
- We can pass data down the component tree from parent to child through the @Input binding.
- We can pass data up the component tree through the use of events and handler functions with the @Output binding.

## Services

- Services are modules that include reusable logic across our application.
- We can inject these services into our components through dependency injection.
- An example could be an API service that provides the functionality to interact with the back-end API.
