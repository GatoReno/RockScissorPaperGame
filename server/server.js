const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const clientPath = `${__dirname}/../client`;
console.log(`Serving static from ${clientPath}`);
//middle-ware
app.use(express.static(clientPath));
const server = http.createServer(app);
var port = 8080;

const io = socketio(server);


//working with socket io's
io.on('connection', (sock) => {
    sock.emit('message','Welcome, u r connected')
});


server.on('error',(err)=>{
  console.error('Server erro:',err);
});

server.listen(port,()=>{
  console.log('App started on port .-. '+port);
});


//https://www.youtube.com/watch?v=xVcVbCLmKew
