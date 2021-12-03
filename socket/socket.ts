import { Socket, io } from 'socket.io-client'; // need to install

const URL = 'http://localhost:8000'; // server

const socket: Socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
