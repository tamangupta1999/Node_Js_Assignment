// Q.6 creating an http server....

//importing http from global packages....
const http = require('http');
// module importing so that exported function is used in this file
const demoModule = require('./test-module');
let message = demoModule.demoFun('Taman');
const port = 8080;

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.write('Node js Server is ready,');
    response.write(message);
    response.end();
}).listen(port, () => {
    console.log(`server is listening on :${port}`)
})


// Q.3 Install dependencies and dev dependencies
// Ans - To install dependecies use npm install --save [package name] command---
// I have installed an package moment check package.json [dependecies] 
// To install devDependencies use npm install --save-dev [package name] command--- 
// devDependencies is used in development mode only ..
// I have installed an package mocha check package.json [devDependecies] 