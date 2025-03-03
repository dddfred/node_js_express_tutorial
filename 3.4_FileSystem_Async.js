/**
 * The Asynchronous functions of read and write file take in two parameter, the path to the file, and a call back function
 * In the call back function, we pass in two paramaters as well. First an error parameter, if there is one, and the second one is the result
 * note that we also have to specify the encoding type(utf8), otherwise we will not get the desired result
 */

//writeFileSync takes in two paramenter, the file name(it creates a file if one doesnt already exist), and the values(whatever we want to write to it) NOTE: this overwrites anything that the file already contains if the file exists.
//If we want to append to the file, we need to put a another parameter `{flag: a}`

//The callback functions are used to access the result from the methods

const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf-8', (err, result) =>{
    if(err){
        console.log(err);
        return;
    }

    const first = result;

    readFile('./content/subfolder/second.txt','utf-8',(err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;

        writeFile(
          './content/result-async.txt', //path
          `Here's the result: ${first}, ${second} `, //content
            (err, result) =>{ //callback function used to access result
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        );
    })
});



