//importing file system 
const fs = require('fs');

//reading file synchroniously 
let content = fs.readFileSync('./newfile.txt','utf8');
console.log(content);
//after reading file this text will print
console.log('Some random text');
