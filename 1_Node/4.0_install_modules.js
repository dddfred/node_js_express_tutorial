const _ = require('lodash');

const items = [1,[2, [4]]];

const newItems = _.flatten(items);

console.log(newItems);

console.log('Hello World!');

/**
 * LOCAL from a repo
 * The package.json has a list of all the dependecies that the project needs, it is up to us to install those dependencies by running the command `npm install`. This will install all dependencies needed.
 * 
 * To unistall a package, we can use the command `npm unistall <packageName>`
 * 
 * We have a nuclear approach to unistall a package, which involves deleting the node_modules folder and the package-lock.json file.
 * We can simply delete the folder from the side bar or run this command `rm -rf node_modules`
 * We can also simple delete the package-lock.json file from the side bar.
 * DO NOT FORGET to remove the depencie from the dependencies list in the package.json if you dont want 
 * this dependencie anymore, otherwise, you'll reinstall said dependencie.
 * After this, we can run `npm install` to reinstall desired packages.
 * You may want to do this in case you get some errors like permission errors or faulty packages.
 * 
 * LOCAL first time
 * To install new packages onto your project for the first time, we can do so by typing the command
 *  `npm i <packageName>`
 * 
 * GLOBAL
 * You can install packages globally, instead of locally by applying the `-g` flag
 * You may want to do this if you have a package that you use constantly and is advantageous to globally install it
 * 
 * The full command on mac to install a package globally is `sudo npm install -g <packageName>`
 * 
 * Many of the packages cause issues when installed globally
 * 
 * it is better to use npx
 *
 * 
 * why package.json>?
 * Many of the dependencies have versions, package.json includes the version of the dependencie so if a 
 * package update its version and gets rid of some features, our project wont be affected and there will 
 * no errors
 * 
 */