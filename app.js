const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user');

// instance of express
const app = express();

// environment variable config
dotenv.config();

//db config
mongoose.connect(process.env.DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Mongoose Is connected'))
    .catch(err => console.log(err))

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/', userRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Sever is running http://localhost:${process.env.PORT}`)
})