/**
 * CommonJS - every file is a module (by default)
 * Modules - encapsulated code (only share minimum)
 */

/**
 * in order to make use of the exported functions, variables etc. We need to use the `require` method.
 * we can use the function by itself or assign it to a variable
 * the require function needs the location of where the variables(path), methods, etc are, and that's what we pass in the paramenters
 * when we are passing modules that are local, meaning in our files, we start with ` ./ ` or ` ../ ` if the module is a couple levels up.
 * for built in modules, it is not necessary to add the prefix ` ./ `
 * 
 */

const names = require('./2.1_modules_names.js');
const sayHi = require('./2.2_modules_utils.js');
const data = require('./2.3_module_alternative_exports.js')

//here we're loading(importing) a module, without it being exported. Note also that is not being assigned to any variable
require('./2.4_mind_grenade.js');//so when you import a module, it automatically invokes the code. This will come in handy later on with external libraries.
//output: The sum is: 15

console.log(data);
console.log(names);
console.log(sayHi);


sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

