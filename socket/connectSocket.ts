import socket from 'socket';

// auth is from firebase
socket.auth = { userID: auth.currentUser?.uid };
socket.connect();
