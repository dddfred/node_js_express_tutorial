const path = require('path');

//.sep - provides the platform specific separator
console.log(path.sep);
//output `/`

const filePath = path.join('/content','subfolder', 'text.txt');
//output: \folder\subfolder\text.txt
//The normalized way of the path
console.log(filePath);

//.basename()  returns the base of the path
const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve('__dirname', 'content', 'subfolder', 'text.txt');
console.log(absolutePath);
//output: C:\Users\dddia\Documents\Visual Studio 2022\node-app\__dirname\folder\subfolder\text.txt

