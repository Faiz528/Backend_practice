const express = require('express')

const db = require('./database.js')

db.execute('SELECT * FROM products')
.then((result)=>{
    console.log(result[0])
})
.catch((err)=>{
    console.log(err)
})
