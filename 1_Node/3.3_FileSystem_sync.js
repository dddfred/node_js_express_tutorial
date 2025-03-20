/**
 * The file system has two types of functions, synchronous (non-blocking) and asynchronous(blocking)
 * These examples will focus on the synchronous
*/
const {readFileSync, writeFileSync} = require('fs');


//The readFileSync take two parameters, first the path to the file, second the encoding
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');

console.log(first, second);

//writeFileSync takes in two paramenter, the file name(it creates a file if one doesnt already exist), and the values(whaever we want to write to it) NOTE: this overwrites anything that the file already contains if the file exists.
//If we want to append to the file, we need to put a another parameter `{flag: a}`

writeFileSync(
    './content/result-sync.txt',
`Here it is the result: ${first}, ${second}`,
{ flag: 'a' } );