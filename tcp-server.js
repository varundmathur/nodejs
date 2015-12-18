var net=require('net');
var tcpServer=net.createServer(function(socket){
socket.write("hello\n");

setTimeout(function(){

socket.end("world \n");

},2000);

});

tcpServer.listen(8000);