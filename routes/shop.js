const express = require('express')

const route = express.Router()

route.get('/', (req ,res)=>{
    res.send("Everything is working fine")
})

module.exports = route