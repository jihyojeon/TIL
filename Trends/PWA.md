# PWA

## Progressive Web Apps

- Progressive Web Apps are a way of providing certain native desktop and mobile features to web apps.
- PWAs use service workers, which are scripts that run in the background of the browser, providing caching, offline capabilities, and push notifications.
- Each PWA needs a “manifest” file which is in JSON format and includes meta-information about the app, like the icon to launch it and the splash screen.
- PWAs aren’t fully supported by iOS devices, in particular native push notifications are not available. <- 사파리를 통해서 pwa를 설치할 수는 있음.
- 크롬이 인기가 많으니까 ,,, 뭐,,,

## 모든 플랫폼에서 동작하는 어플리케이션을 만들기 위한 조건들!

1. responsive web design 일 것.
2. serveice worker를 이용할 것.
3. web app menifest를 사용할 것.
4. push notification을 사용할 것.
5. 사용자들이 native app을 사용하는 것처럼 느낄 수 있도록 다양한 브라우저 api를 이용해서 구현하도록 할 것.
6. 사용자들의 device에 설치가 가능하도록 만들 것.
   ...

### PWA builder

### Workbox

### Maskable

## PWA를 위한 스텝 4가지.

1. 웹 코드로 만든 웹사이트 또는 웹앱.
2. HTTPs
3. Application Manifest - json
4. Service Worker - js : ex. 미리미리 다운받아놓고 앱을 키자마자 보여줄 수도 있음(성능 업)
