## Back-end vs front-end
- Back-end code is executed on the server, whereas front-end code is executed on the client (e.g. the browser, or a mobile app).
- The server environment can be 100% controlled, whereas on the client you only have control over the code you write.

## Web server
- A web server listens for incoming requests on a specified port.
- An HTTP web server works with the request-response model.

## Node JS
- Node is a JavaScript implementation running on the server.
- It provides asynchronous I/O.
- It doesn’t have the window object, and any other properties that are bound to the browser. - Instead it offers several server-side functionalities like an HTTP web server, utilities to operate on files, etc.
- Code can be separated in different files (“modules”) and then exported / imported.
- It offers a package manager to manage dependencies.

```console
npm init
```
npm이 새로운 package.json을 만들어서 필요한 디펜던시 정보 저장.

```console
npm i -D \name\
```
데브 디펜던시에 필요한거 설치.

```console
npm uninstall
```