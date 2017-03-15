
var http = require('http');
var fs = require('fs');
var CLIEngine=require('eslint').CLIEngine;

var express = require('express');
var app = express();

var cli = new CLIEngine({
    envs: ["browser", "node"],
    useEslintrc: true,
    rules: {
        semi: 2
    }
});

var report = cli.executeOnFiles(["main/**.js","main/*/*.js"]);
var formatter = cli.getFormatter("html");

fs.writeFile('ESlintresults.html',formatter(report.results),function(err){
    if(err)
    {
    return console.log(error);
    }
})

app.use("/", express.static(__dirname));

app.listen(3000, function () {
    console.log('listening')
});
