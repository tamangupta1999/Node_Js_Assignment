const users = [
    {
        username: 'taman@gmail.com',
        password: 'taman@123',
        FirstName: 'taman',
        LastName: 'gupta'
    },
    {
        username: 'akash@gmail.com',
        password: 'akash@123',
        FirstName: 'akash',
        LastName: 'agrawal'
    },
    {
        username: 'yatharth@gmail.com',
        password: 'yatharth@123',
        FirstName: 'yatharth',
        LastName: 'sharma'
    },
    {
        username: 'aman@gmail.com',
        password: 'aman@123',
        FirstName: 'aman',
        LastName: 'singh'
    },
    {
        username: 'vicky@gmail.com',
        password: 'vicky@123',
        FirstName: 'vicky',
        LastName: 'sharma'
    },
    {
        username: 'neha@gmail.com',
        password: 'neha@123',
        FirstName: 'neha',
        LastName: 'sharma'
    }
];

exports.searchUser = (username) => {
    return users.filter(user => user.username === username)
}