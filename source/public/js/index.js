console.log("hola, estoy ejecurando un script");

const socket = io();

socket.emit("message", "hola, me acabo de conectar!")