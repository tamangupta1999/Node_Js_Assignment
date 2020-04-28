const http = require('http');
const url = require('url');
const students = require('./students');
const port = 8080;
const hostname = '127.0.0.1';

// Q.2.  Create a student API which will return list of all students.

// Create a table which will show all users

// Create filter for student branch name and on clicking on filters it will show students accordingly.

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/js' });
    let parts = url.parse(req.url);
    if (parts.pathname === '/students') {
        res.end(JSON.stringify(students))
    } else if (parts.pathname == '/students/branch') {
        const queryObject = url.parse(req.url, true).query;
        const student = students.filterStudents(queryObject.branch);
        if (student.length === 0) {
            res.end(`No Student Found of ${queryObject.branch}`);
        } else {
            res.end(JSON.stringify(student));
        }
    }

})

// server is listening

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`))