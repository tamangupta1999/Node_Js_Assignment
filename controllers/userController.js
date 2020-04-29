const userData = require('./userData');

const fetchAllUser = (req, res) => {
    res.send(userData);
}

const addNewUser = (req, res) => {
    let lengthQuery = Object.keys(req.query).length;
    if (lengthQuery > 1) {
        if (req.query.email !== '' && req.query.name !== '') {
            userData.users.push(req.query);
            res.send({ message: 'User Inserted Successful' })
        } else {
            res.send({ message: 'Email Address And Name Is Manadatory' })

        }
    } else {
        res.send({ message: 'User Insertion Failed' })

    }
}

const deleteExistingUser = (req, res) => {
    let updatedUserData = userData.users.filter(user => user.email !== req.query.email);
    if (updatedUserData.length === userData.users.length) {
        res.send({ message: 'Enter Valid Email' });

    } else {
        userData.users.splice(0, userData.users.length);
        userData.users.push(...updatedUserData);
        res.send({ message: `${req.query.email} deleted successfully` })
    }
}

module.exports = {
    fetchAllUser,
    addNewUser,
    deleteExistingUser
}