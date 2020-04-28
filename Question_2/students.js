const students = [
    {
        username: 'taman@gmail.com',
        password: 'taman@123',
        FirstName: 'taman',
        LastName: 'gupta',
        branch : 'CSE'
    },
    {
        username: 'surbhi@gmail.com',
        password: 'surbhi@123',
        FirstName: 'surbhi',
        LastName: 'agrawal',
        branch : 'ECE'
    },
    {
        username: 'rashika@gmail.com',
        password: 'rashika@123',
        FirstName: 'rashika',
        LastName: 'sharma',
        branch : 'CSE'
    },
    {
        username: 'yatharth@gmail.com',
        password: 'yatharth@123',
        FirstName: 'yatharth',
        LastName: 'sharma',
        branch : 'CSE'
    },
    {
        username: 'aman@gmail.com',
        password: 'aman@123',
        FirstName: 'aman',
        LastName: 'singh',
        branch : 'ECE'
    },
    {
        username: 'vicky@gmail.com',
        password: 'vicky@123',
        FirstName: 'vicky',
        LastName: 'sharma',
        branch : 'CIVIL'
    },
    {
        username: 'neha@gmail.com',
        password: 'neha@123',
        FirstName: 'neha',
        LastName: 'sharma',
        branch : 'CSE'
    }
];

const filterStudents = (branchName) => {
    return students.filter(student => student.branch === branchName);
}

module.exports = {
    students,
    filterStudents
 }