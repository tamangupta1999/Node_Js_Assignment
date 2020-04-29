const express = require('express');
const userController = require('./../controllers/userController');



module.exports = (app) => {
    //Middleware
    app.use(express.json());
    app.use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        next();
    })
    //Routes
    app.get('/user/all', userController.fetchAllUser);

    app.delete('/user/delete', userController.deleteExistingUser)

    app.use((req, res, next) => {
        req.query.currentTime = Date.now();
        next();
    });

    app.post('/user/add', userController.addNewUser);

}
