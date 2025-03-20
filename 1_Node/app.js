const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt');
/**
 * With createReasStream, we read data in chunks of 64kb by default
 * the last buffer gets the remainder of the data
 * 
 * additional paramenters:
 * highWaterMark - control size of the buffer
 * encoding - controls the type of encoding we want i.e. utf8
 * note: the encoding lets us see the actual contents of the file in the console
 * 
 */

//const stream = createReadStream('./content/big.txt', { highWaterMark: 9000})
//const stream = createReadStream('../content/big.txt', { encoding: 'utf8')

//data event
stream.on('data', (result) => {
     console.log(result);
})

//error event
stream.on('error', (err) =>{
     console.log(err);
})

  var http = require('http')
  var fs  = require('fs')

  http.createServer(function(req, res){
     // const text = fs.readFileSync('./content/big.txt', 'utf8');
     // res.end();
     const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
     fileStream.on('open',() =>{
          fileStream.pipe()
     })
     fileStream.on('open', (err) =>{
          res.end(err)
     })
  })