const http = require('http');
const url = require('url');
const users = require('./users');
const port = 8080;
const hostname = '127.0.0.1';

// Q.1 Create a REST API for User entity with following fields:

//            Username
//            Password
//            FirstName
//            LastName

// Create search bar which will search by user name and will create an autocomplete list of user which fullfil the criteria.



const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/js' });
    let parts = url.parse(req.url);
    if (parts.pathname === '/') {
        res.end('Search user with username by passing data in query params')
    } else if (parts.pathname === '/users') {
        const queryObject = url.parse(req.url, true).query;
        const user = users.searchUser(queryObject.username);
        if (user.length === 0) {
            res.end('No User Found With This UserName ')
        } else {
            res.end(JSON.stringify(user));
        }
    }
})

// server is listening

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`))