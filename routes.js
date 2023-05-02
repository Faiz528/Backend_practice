const fs = require('fs')

const requestHandler = (req , res) =>{
    const url = req.url
    const method = req.method
    var body=[];
    if(req.url == '/'){
        fs.readFile("meassage.txt" ,{encoding: "utf-8"} , (err,data)=>{
         if(err){
           console.log(err);
         }
         res.write('<html>');
        res.write('<head><title> Enter meassage</title></head>')
        res.write(`<body>${data}</body>`)
        res.write('<body><form action ="/message" method="POST"><input type="text" name="message"><button type="submit"> Submit</button></form></body>')
        res.write('<html>')
         res.end();
        }) 
        
       }
       if(url ==='/message' &&  method === "POST"){
         req.on("data",(chunk)=>{
           body.push(chunk);
         });
          
         return req.on("end" , ()=>{
         const parseBody = Buffer.concat(body).toString();
         const message = parseBody.split("=")[1];
         fs.writeFile('meassage.txt' , message,(err) =>{
           if(err){
             console.log(err)
           }
         res.statusCode = 302;
         res.setHeader('Location' , '/');
          return  res.end()
         });
         
         });
           }
}
module.exports = requestHandler;
