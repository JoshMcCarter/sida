var express = require('express');
var fs = require('fs');
var app = express();
var mustache = require('mustache');
var path = require('path');
var bodyParser = require('body-parser');
var {exec} = require('child_process');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'))

function configurePage(req, res, next) {
    console.log(req.body);
    // call the setup bash script here
    var runConfig = exec('sh test_bash.sh');
    runConfig.stdout.on('data', function(data) {
        console.log(data);
    });
    next();
}

//app.use(configurePage);

app.post('/settings', configurePage, function (req, res) {
    res.sendFile(path.join(__dirname + '/settings.html'));
});

app.get('/takedown', function(req, res) {
    console.log('Taking down the page');
    // call the takedown bash script
    res.redirect('/');
})

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
        {'name': 'LAMP Stack'},
        {'name': 'File Share System'}
    ],
    bootstrap_template : [
        {'name': 'Template 1'},
        {'name': 'Template 2'}
    ]
}
