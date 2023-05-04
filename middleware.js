const express = require('express')
const app = express()

const admin = require("./routes/admin.js")
const shop = require("./routes/shop.js")
app.use(admin)
app.use(shop)

app.listen(3000, () => console.log('Server Started'))