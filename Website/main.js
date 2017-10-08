var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.send("HELLO");
});

app.listen(3000, function() {
    console.log('Website listening on port 3000')
});
