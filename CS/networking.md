# Networking



## Protocols
- 컴퓨터 내부에서, 또는 컴퓨터 사이에서 데이터의 교환 방식을 정의하는 규칙 체계
- Are needed for two entities to communicate with each other.
- Standardize how communication starts and ends, and how information is passed.
- The Internet is a protocol, that allows to link billions of devices worldwide.

## IP addresses, ports, LAN and WAN
- An IP address in a computer network is a unique identifier, that allows devices to find each other.
- IPv4 (32-bit) -> IPv6 (128-bit)
- The IP address is followed by a network port, that defines what process you’re interacting with. The TCP-UDP protocol provides 65535 network ports (the first 1023 are reserved for the operating system).
  - TCP
    - 두 개의 호스트를 연결하고 데이터 스트림을 교환하게 해주는 중요한 네트워크 프로토콜
    - TCP의 역할은 에러없이 패킷이 신뢰할 수 있게 전달 되었는지 보증해 주는 것
- LAN
  - Local Area Network
  - refers to the “internal network” (e.g. an office).
- WAN
  - Wide Area Network
  - refers to the “external network” (e.g. the Internet).

## Data serialization and transport
- Data to be transmitted need to be serialized first (i.e. converted to binary).
- Transmission of data happens in small “packets”, which are then recomposed on the other side, as this allows for better error handling.

## URI, URL, and DNS
- URI
  - Uniform Resource Identifier
  - in the Internet this corresponds to a URL (i.e. “uniform resource locator”).
  - A generic URI is of the form: scheme://host[:port]/path[?query][#fragment].
- A URL to be valid needs to have a scheme, host, port (if omitted is 80 by default), and path. Queries and fragments are optional, and used on a need basis.
- DNS
  - Domain Name System
  - a distributed database of name servers spread across the Internet with the responsibility of converting domain names into their corresponding IP addresses, so that each request can reach the correct destination.

## HTTP(s) and status codes
- HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜
- 클라이언트-서버 프로토콜: (보통 웹브라우저인) 수신자 측에 의해 요청이 초기화되는 프로토콜
- 클라이언트와 서버들은 개별적인 메시지 교환에 의해 통신함.
  - 요청(requests): 브라우저인 클라이언트에 의해 전송되는 메시지
  - 응답(responses): 서버에서 응답으로 전송되는 메시지
- HTTP means “hypertext transfer protocol” and is the foundation of data communication for the world wide web.
- It functions as a request-response protocol in the client-server computing model, and is “stateless” (i.e. each request is completely independent from the others).
- HTTPS is a safer variant of HTTP, where the connection is encrypted.
- Every request and response comes with “headers”, and can include a “body”.
- HTTP provides a pre-defined set of request methods, which are indicated in the headers. The main ones are: GET, POST, PUT, DELETE.
- GET is a “safe” method (it doesn’t modify resources on the server).
- GET, PUT, and DELETE are “idempotent” (repeating them “n” times doesn’t change the final result on the server).
- Each server response has a “status code” in its headers. Status codes are divided in the following ranges:
  - 1xx informational
  - 2xx success
  - 3xx redirection
  - 4xx client error
  - 5xx server error

## Ajax and CORS
- Ajax is a way to make [asynchronous](https://wikidocs.net/22372) HTTP requests through JavaScript (i.e. without having to reload the entire page).
```Javascript
// Browser API
const httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = cb;
httpRequest.open('GET', '/weather');
httpRequest.send();
```
```Javascript
// jQuery
$.get('/weather', cb);
```
- Because Ajax can use any HTTP method (thus performing potentially harmful requests), it’s been limited to the “same origin” policy.
- Eventually CORS (i.e. “cross-origin resource sharing”) has been introduced to the - - HTTP standard, so that each domain can define whether to accept asynchronous requests from other domains (through the Access-Control-Allow-Origin header).


## WebSockets and WebRTC
- Other communication protocols exist outside of HTTP (e.g. ftp, mail, etc).
- WebSockets is a stateful protocol, that allows the server to send “events” back to the client, after an initial “handshake” connection has been established, and until it’s terminated by either side.
- WebRTC is a recent protocol, that allows clients to directly establish a peer-to-peer connection between them and share a data stream without passing through a server (e.g. audio, video, files, etc).