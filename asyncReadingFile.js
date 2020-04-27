//importing file system 
const fs = require('fs');

//reading file asynchroniously 
let content = fs.readFile('./newfile.txt','utf8',(error,content)=>{
    // if any error occured during reading file it will throw error
    if(error) {
        console.log('Some error occured',error);
    }else{
        console.log(content);
    }
})

console.log('Some random text');

// 2nd way using server....

const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('newfile.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
