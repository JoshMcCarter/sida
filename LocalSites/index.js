var express = require('express');
var fs = require('fs');
var app = express();
var mustache = require('mustache');
var path = require('path');
var bodyParser = require('body-parser');
var {exec, execSync} = require('child_process');
var jsonFile = require('jsonfile');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'))

function configurePage(req, res, next) {
    console.log(req.body);
    fs.writeFile('settings.json', JSON.stringify(req.body), 'utf8', function(err, data) {
        if(err) {
            console.error(err)
        }
        else {
            var runConfig = exec('../ServerStarter/ServerStarter.sh settings.json');
            runConfig.stdout.on('data', function(data) {
                console.log(data);
            });
            next();
        }

    });

}

//app.use(configurePage);

app.post('/settings', configurePage, function (req, res) {
    res.sendFile(path.join(__dirname + '/settings.html'));
});

app.get('/takedown', function(req, res) {
    console.log('Taking down the page');
    var runConfig = exec('sh test_takedown.sh');
    runConfig.stdout.on('data', function(data) {
        console.log(data);
    });
    res.redirect('/');
})

app.get('/', function(req, res) {

    var runStartup = execSync('../JSONLoader/JSONLoader.sh');

    fs.readFile('index.html', function(err, template) {
        res.set('Content-Type', 'text/html');
        template = template.toString();
        var obj = jsonFile.readFileSync('options.json');

        res.send(mustache.to_html(template, obj))
    })
});

app.listen(8000, function() {
    console.log('Startup listening on port 8000');
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
