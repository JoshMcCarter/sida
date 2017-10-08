var terminate = require('terminate');

var pid = parseInt(process.argv[2]);

terminate(pid, function(err) {
    if(err) {
        console.error(err);
    }
})
