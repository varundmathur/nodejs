var http=require('http');
var myServer=http.createServer(function(req,res){
res.writeHead(200,{'content-type':'text/plain'});
res.write("hello\n");

setTimeout(function(){

res.end("world \n");

},2000);

});

myServer.listen(8000);