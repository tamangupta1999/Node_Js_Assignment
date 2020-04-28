const http = require('http');

const port = 8080;
const hostname = 'localhost';

//Q.3 Create header which will show following items

// Home
// About
// Contact us
//On clicking on the items it will load the pages

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-type': 'application/json' });
    if (req.url === '/home') {
        res.end("Welcome To Home Page");
    } else if (req.url === '/about') {
        res.end('Welcome To About Page');
    } else if (req.url === '/contact') {
        res.end('Welcome To Contact Us Page');
    }
    res.end('<p>Enter Valid URL</p>')
})

// server is listening

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`))