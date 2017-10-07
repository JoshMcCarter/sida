var express = require('express');
var fs = require('fs');
var app = express();
var mustache = require('mustache');
var path = require('path')

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'))

app.get('/', function(req, res) {
    fs.readFile('index.html', function(err, template) {
        res.set('Content-Type', 'text/html');
        template = template.toString();
        res.send(mustache.to_html(template, test_data))
    })
});

app.listen(8000, function() {
    console.log('Listening on port 8000');
});

test_data = {
    title : 'Server Setup',
    arch : [
        {'name': 'MEAN Stack'},
        {'name': 'LAMP Stack'}
    ],
    bootstrap_template : [
        {'name': 'Template 1'},
        {'name': 'Template 2'}
    ]
}
