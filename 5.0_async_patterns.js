/**
 * 
 * ASYNCHRONOUS PATTERNS
 * 
 */

//HTTP

const http = require('http');

const server = http.createServer((req,res) => {
     if(req.url === '/'){
          res.end('Home Page!')
     }
     if(req.url == '/about'){
          //BLOCKING CODE!!!!
          for(let i = 0; i < 1000; i++){
               for(let j = 0; j < 1000; j++){
                    console.log(`${i}, ${j}`)
               }
          }
          res.end('About Page')
     }
})

server.listen(5000, () => {
     console.log('Server Listening on port 5000...')
})

/**
 * This is an example of how a non-synchronous code can block ohter request until is done running,
 * this is why is better to use synchronous patters to prevent slow functionality 
 * 
 * What happens in the code is that if a user navigate to the about page, other users cannot use the
 * other endpoints until the user that requested the about endpoint finishes executing
 */


//FILE SYSTEM ASYNC


const {readFile, writeFile} = require('fs').promises;

//const util = require('util') //module that has promisify method

/**
 * with the promisify method, we can make our readFile/writeFile variable, which is looking for 
 * a callback, into a function that returns a promise
 */
//WE CAN ALSO SKIP THIS CODE BY ADDING .promise after the require function
// const readFilePromise =  util.promisify(readFile);
// const writeFilePromise =  util.promisify(writeFile);

// const getText = (path) => {
//      return new Promise((resolve,reject) => {
//           readFile(path, 'utf8', (err, data) => {
//                if(err){
//                     reject(err) 
//                }else{
//                     resolve(data) //passes in data
//                }
//           })
//      })
// }

//creating our own wrapper function
// getText('./content/first.txt')
// .then((result => console.log(result)))
// .catch((err) => console.log(err))

//we can chain .then and .catch because we are returning a promise

//The `await` operator is used to wait for a Promise and get its fulfillment value. 
//IT CAN ONLY BE USED INSIDE AN ASYNC FUNCTION or at the top level of a module.

//Everytime we have this async approach, we need to wrap it in a try-catch block
const start = async() => {
     try {
          // const first = await getText('./content/first.txt') //using await to wait for promise fullfilment. Only once the promise gets resolved, then I'll get my response
          // const second = await getText('./content/subfolder/second.txt') 

          //////////With util.promisify() method
          // const first = await readFilePromise('./content/first.txt', 'utf8') //returns promise
          // const second = await readFilePromise('./content/subfolder/second.txt', 'utf8') 
          // await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`)
          // console.log(first,second);

          /////// with .promises after require() method
          const first = await readFile('./content/first.txt', 'utf8') //returns promise
          const second = await readFile('./content/subfolder/second.txt', 'utf8') 
          await writeFile('./content/result-mind-grenade.txt', 
          `THIS IS AWESOME: ${first} ${second}`, 
          {flag: 'a'}
          )
          console.log(first,second);
          
     } catch (error) {
          console.log(error)
     }
     
  


}


start();

/**
 * The reason the professor did all of this, was to showcase how things work under the hood. 
 * Many of the functionality that we coded up is already given to us. But we would not understand
 * that functionality until we understand how it works
 * 
 */