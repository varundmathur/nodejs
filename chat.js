var net=require('net');

var sockets=[];

var serv=net.Server(function(socket){

sockets.push(socket);
socket.on('data',function(input){
	for(var i=0;i<sockets.length;i++){
		if(sockets[i]==socket)continue;//not to listen to own socket	
		sockets[i].write(input);
	}

});

socket.on('end',function(){
	
var i=sockets.indexOf(socket);
	sockets.splice(i,1);
});


});
serv.listen(8000);
