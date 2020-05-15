const jwt = require('jsonwebtoken');

const isAutheticated = async (req, res, next) => {
    if (req.rawHeaders[0] !== 'auth-token') res.status(401).send({ message: 'Authorization token is missing' });
    try {
        let verified = jwt.verify(req.rawHeaders[1], process.env.TOKEN_SECRET);
        res.user = verified;
        next();
    } catch (error) {
        res.status(404).send(error)
    }
}
module.exports = {
    isAutheticated
}