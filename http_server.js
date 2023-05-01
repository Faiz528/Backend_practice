const http = require('http');


const port = 3000;

const server = http.createServer((req, res) => {
  if(req.url == '/node')
  res.end('Hello World I hope everything');

else if(req.url == "/home")
   res.end("Welcome home")
   
else if(req.url == "/about")
   res.end("Welcome to About US Page")

else if(req.url == "/home")
   res.end("Welcome home")


});


server.listen(port, function() {
  console.log(`Server running at http://${port}/`);
});
