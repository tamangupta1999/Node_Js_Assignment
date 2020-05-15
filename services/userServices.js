const User = require('./../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const validatePassword = async (password, hashPassword) => {
    let result = await bcrypt.compare(password, hashPassword)
    return result;
}

const loginHandler = async ({
    email,
    password
}) => {
    try {
        const user = await User.findOne({ email: email });
        if (!user) return { status: 404, message: "Email Does Not Exist..." }
        let verify = await validatePassword(password, user.password);
        if (!verify) return { status: 406, message: "Incorrect Password" }
        let token = await jwt.sign({ id: user._id }, process.env.TOKEN_SECRET)
        return { status: 200, token: token, message: 'Success' }
    } catch (error) {
        return {
            status: 400,
            error
        }
    }
}

const registerHandler = async ({
    email,
    password,
    name
}) => {
    let user = await User.findOne({ email: email });
    if (user) return { status: 404, message: 'Email already exists...' }

    let newUser = new User({
        email,
        password,
        name
    })
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        newUser.password = hashPassword;
        let savedUser = await newUser.save();
        return {
            status: 200,
            data: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email
            }
        };
    } catch (error) {
        return {
            status: 404,
            error: error
        };
    }

}

module.exports = {
    loginHandler,
    registerHandler
}