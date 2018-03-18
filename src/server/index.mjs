import http from 'http';
import socket from 'socket.io';

const server = http.createServer();
const io = socket(server);

io.on('connection', function(client){
  console.log("wee");
  client.on('event', function(data){});
  client.on('disconnect', function(){});
});


server.listen(3000);
