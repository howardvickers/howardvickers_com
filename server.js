
var fs = require('fs')
var express = require('express')
var app = express()


// this is needed for the https server... 
// var HTTP = require('http')
var https = require('https')

app.use(express.static('./public'))

// try-catch is for when we're working on the localhost...
try {
    var httpsConfig = {
    key: fs.readFileSync('/etc/letsencrypt/live/howardvickers.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/howardvickers.com/cert.pem'),

    // this is needed for the https server... 
    }
    var httpsServer = https.createServer(httpsConfig, app)
    httpsServer.listen(443)}
catch(error){
    console.log(error)
    console.log('could not set up HTTPS')
}
finally{
    console.log('this code runs regardless of whether the above code succeeded or failed')
}

// ensure that any visitor to the non-https (non-secure) would be redirected to the secure version
// var httpApp = express()
app.get('/', function(req, res){
    console.log(req.url)
    res.redirect('https://howardvickers.com'+ req.url)
})
// httpApp.listen(8080)

app.listen(80)


// note that we are listening to both the normal and the secure with the same app
// var httpServer = HTTP.createServer(app)
// httpServer.listen(80)


// sudo nodemon server.js (if using port 80 rather than 8080)
// app.listen(80)



