const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios').default;

const PORT = 8080;

// Q.3 Create API using Async/Await or Promises, fetch github profile and followers. 
//(https://api.github.com/users/<username>)

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/v1/user/:username', async (req, res) => {
    try {
        let username = req.params.username;
        let response = await axios.get(`https://api.github.com/users/${username}`);
        res.send(response.data);
    } catch (error) {
        res.send(error)
    }
})


app.listen(PORT, () => {
    console.log(`Server is listening : http://localhost:8080`);
})
