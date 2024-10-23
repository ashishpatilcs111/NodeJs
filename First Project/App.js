const express = require('express');
var http  = require('http');
var dt = require('./MyDateTime');
var url = require('url')
var fs = require('fs')

const app = express();
const port = 3000;


app.get("/",(req, res) =>{
    res.send("Hello World")
})

app.listen(port, ()=>{
    console.log(`Server is Running at the port ${port}`);
})

http.createServer(function(req, res){
    var q = url.parse(req.url , true).query;
    var txt = q.year + " \n"+ q.month;


    fs.readFile('demoFile.html',function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("This is the Date "+ dt.dateAndTime());
       return res.end(data);
    })
}).listen(8080);