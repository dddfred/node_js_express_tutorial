/**
 * This type of exporting is called `Export as you go`
 */

//in this format, we're exporting and declaring the variable at the same time
module.exports.item = ['item1', 'item2'];

const person = {
    name:'bob'
}

//in this format, we're giving the export a name
module.exports.singlePerson = person;