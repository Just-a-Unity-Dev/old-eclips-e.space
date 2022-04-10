// Imports
const express = require('express');
const mongoose = require('mongoose')

const cors = require('cors')

require('dotenv').config()

// Vars
const app = express();
const port = process.env.PORT;

// Env
const uri = process.env.MONGO_URL

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Connected to database")
}).catch(err => {
    console.error(err)
})

app.use(
    // MIDDLEWARE
    cors(),
    express.static('public'),
    express.json(),

    // API IMPORTS
    require("./api/link.js"),
    require("./api/api.js"),
    require("./api/accounts.js"),

    // IMPORT THIS LAST!
    require("./routes/404.js"),
);

app.get('/', (req, res) => {
    res.sendFile(__dirname + './public/index.html')
});

app.get('/status', (req,res) => {
    res.json({
        "status": res.statusCode
    })
});

app.listen(port, () => {
    console.log("Server is running~~!\n\nhttp://localhost:" + port);
});