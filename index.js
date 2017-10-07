// initialize jquery
var jsdom = require('jsdom').jsdom;
jsdom.env('', function (err, window) {
    if(err) {
        console.error(err);
        return;
    }
    global.$ = require('jquery')(window);
});
