//server.js
const express = require('express')
const app = express()
// serve static assets from the public folder in project root
app.use(express.static('public'))
//
app.listen(3002, () => console.log('listening on port 3002'))
