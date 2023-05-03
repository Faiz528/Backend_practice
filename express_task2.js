const express = require('express');
const app = express();

const bodyParser = require("body-parser")

app.use( bodyParser.urlencoded({extended :true}))
app.get("/" , function(req , res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req , res){
     
    console.log(req.body.pname)
    console.log(req.body.size)
    res.send("Task done")
})

app.listen(3000 , function(){
    console.log("Server started");
})
