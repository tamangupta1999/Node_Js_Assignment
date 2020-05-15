const router = require('express').Router();
const { login, register } = require('./../controller/userController');
const { isAutheticated } = require('./../config/isAutheticated');

//login route
router.post('/login', login);

//register route
router.post('/register', register);

//protected routes
router.get('/dashboard', isAutheticated, (req, res) => res.status(200).send('DONE'))
module.exports = router;