var http = require('http'),
    fs = require('fs');
	
var express = require('express');
var app = express();

app.use("/", express.static(__dirname));

app.listen(3000, function() { console.log('listening')});

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