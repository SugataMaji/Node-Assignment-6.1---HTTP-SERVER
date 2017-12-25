var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request ,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    var r;
    var sum=0;    
    var n=121;//It is the number variable to be checked for palindrome  
  
while(n>0){ 
    var temp =n;    
    r=n%10;  //getting remainder 
    n=n/10;   
    sum=sum*10+r;      
}
  if(sum!=temp)    {
    console.log("palindrome number ");
    response.write("palindrome number "); 
  }   
  else{   
    console.log("not palindrome");
    response.write("not  palindrome"); 
  }


response.end();

});
server.listen(9000,function(){
console.log("Server started listening");
});