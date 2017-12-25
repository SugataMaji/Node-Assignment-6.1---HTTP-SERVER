var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request ,response){
fs.readFile("sample.html",function(err,data){
response.writeHead(200,{"Content-type":"text/html"});
response.write(data);
response.end();
});
});
server.listen(9000,function(){
console.log("Server started listening");
});