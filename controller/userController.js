const userServices = require('./../services/userServices');

const login = async (req, res) => {
    let response = await userServices.loginHandler(req.body);
    res.status(response.status).header('auth-token', response.token).send({
        status: response.status,
        message: response.message
    });
}
const register = async (req, res) => {
    let response = await userServices.registerHandler(req.body);
    res.status(response.status).send(response);
}


module.exports = {
    login,
    register
}