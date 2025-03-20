/**
 * When loading built in modules, we do not need the prefix `./ `. we simply need the name of the module. If we want to know more about the methods of a specific module, we can check the documentation
 */

const os = require("os");

//info about current user
const user = os.userInfo();
console.log(os.userInfo()); //output

//method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
