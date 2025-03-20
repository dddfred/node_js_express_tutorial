/**
 *  The module http has a function to create a server called createServer()
 * 
 * The function requires a callback function with two paramenters
 * The first paramenter is the incoming request
 * The second paramenter is the response that we want to take for the incoming request
 * 
 * We also have to set up what port is our server listening on with a listener() method
 */

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('This is a short history about us');
    }

    res.end(`
        <h1>Ooops!</h1>
        <p>We can't seem to find the page that you are looking for</p>
        <a href="/"> Back home! </a>
    `)
})

server.listen(5000);