var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request ,response){
var data = fs.readFileSync("sample.txt",{encoding:"utf8"});
console.log(data);
var data1 = fs.readFile("sample1.txt",{encoding:"utf8"},function(err,data1){
    console.log(data1);
response.writeHead(200,{"Content-type":"text/html"});
response.write(data);
response.write(data1);
response.end();
});

});
server.listen(9000,function(){
console.log("Server started listening");
});