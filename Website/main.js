var express = require('express');
var app = express();
var path = require('path');

var bootstrap_template = process.argv[2];
console.log(__dirname.substring(0, __dirname.lastIndexOf('/')) + bootstrap_template.substring(2));

app.use('/css', express.static(__dirname.substring(0, __dirname.lastIndexOf('/')) + bootstrap_template.substring(2) + '/css'));
app.use('/js', express.static(__dirname.substring(0, __dirname.lastIndexOf('/')) + bootstrap_template.substring(2) + '/js'));
app.use('/images', express.static(__dirname.substring(0, __dirname.lastIndexOf('/')) + bootstrap_template.substring(2) + '/images'));

app.get('/', function(req, res) {
    res.sendFile(__dirname.substring(0, __dirname.lastIndexOf('/')) + bootstrap_template.substring(2) + '/index.html');
});

app.listen(3000, function() {
    console.log('Website listening on port 3000')
});
