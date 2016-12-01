var express = require('express');
var app = express();
var fs=require('fs');

app.use("/", express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile('./index.html');
});

app.listen(3000, function () {
    console.log('listening at 3000...')
});

/*
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});*/