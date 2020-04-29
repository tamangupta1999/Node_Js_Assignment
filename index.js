const express = require('express');
const app = express();
const PORT = 8080;
const userRouter = require('./routes/userRouter');

userRouter(app);

app.listen(PORT, () => {
    console.log(`Server is listening : http://localhost:8080`);
})

