var url = 'http://mylogger.oi/log';

function log (message){
    console.log(message);
}


//module.exports.log = log;

//we can also export a single funtion like this

module.exports = log;//retuns a single function
