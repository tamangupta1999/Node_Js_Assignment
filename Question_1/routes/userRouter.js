const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./../controllers/userController');

const requestTimer = (req, res, next) => {
    req.query.currentTime = Date.now();
    next();
}

module.exports = (app) => {
    //Middleware
    app.use(cors({ "origin": "http://localhost:3000", credentials: true }));
    app.use('/session', session({ secret: 'secret,key', saveUninitialized: false, resave: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //Routes
    app.get('/session', userController.sessionManager);

    app.get('/user/all', userController.fetchAllUser);

    app.delete('/user/delete', userController.deleteExistingUser);

    app.use(requestTimer);

    app.post('/user/add', userController.addNewUser);

}
