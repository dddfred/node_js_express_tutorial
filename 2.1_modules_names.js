/**
 *  * Names module
 */
//local
const secret = "SUPER SECRET";
//share
const john = "John";
const peter = "Peter";

/**
 * In order to export module variable, methods or classes, we need to export them usign the `exports` method. This will put the in the exports object where we can easily manipulate the data
 */

module.exports = { john, peter }; //the object has two properties
