const express = require('express')

const route = express.Router()

route.use('/addproduct' , (req , res , next)=>{
    res.send('<form action="/product" method="post"><input type="text" name="name"><button type="submit" name="send">Add Product</button></form>')
})

route.post("/product" , (req , res)=>{
    res.redirect('/')
})

module.exports = route