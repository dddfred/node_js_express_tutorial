//this is how we load the module object. The object module named is exports but we use the require function.
//const logger = require('./logger.js');
//is best practice to use const when loading a module to avoid overwriting our value
//console.log(logger);
//This is how we call the function. The function's name is 'log' in the logger.js file. We use the logger variable first to reference the loading of the object. 
//logger.log('message');

// const log = require('./logger.js'); //loads single function

// log('message');


//////////////////////
//PATH MODULE

// const path = require('path'); //checks first to see if argument is a built in module first and then looks for a path

// var pathObj = path.parse(__filename); //Here we are calling the parse method with and argument __filename

// console.log(pathObj);

/**
 * Returned object 
 * {
  root: 'C:\\',
  dir: 'C:\\Users\\dddia\\Documents\\Visual Studio 2022\\node-app',
  base: 'app.js',
  ext: '.js',
  name: 'app' }
*/

//////////////////////////
//OS MODULE
/**
 * The OS module can give us information about our current operating system
 * 
 */

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total memmory: ${totalMemory}`);

///////////////////////
//File System
/**
 * The file system lets us work wit files. 
 * Note: that every method comes asyn and sync
 * It is not recommended to use the synchronous methods because it decreases performance
 * 
 */
//  const fs = require('fs');

// fs.readdir('./', function(err, files){
//   if(err) console.log('Error', err);
//   else console.log('Result: ', files)
// });


/////////////////////////////////////////////////
//Events module
/**
 * An event is a signal that something has happened in our application
 * 
 */

// const EventEmitter = require('events');//EventEmmiter is a class

// const emitter = new EventEmitter();//instance of class. Creating an object

// //We have to set up a listener before we raise an event
// //Listener
//           //name of event, acutal listener
// emitter.on('MessageLogged!', function(){
//   console.log('Listener called!');
// });
// //Raising an event
// emitter.emit('MessageLogged!');



