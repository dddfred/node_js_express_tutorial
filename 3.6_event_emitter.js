const htpp = require('http');

// const server =  htpp.createServer((req,res) =>{
//      res.end();
// })

//Using Event Emitter API
const server = htpp.createServer();

//emits request event
//subscribe to it / listen to it / respond to it
server.on('request', (req, res) =>{
     res.end('Welcome')
});

server.listen(5000);