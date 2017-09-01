

var express = require('express')
var app = express()

app.use(express.static('./public'))

// sudo nodemon server.js (if using port 80 rather than 8080)
app.listen(80)



