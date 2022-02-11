// Imports
const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()

// Vars
const app = express();
const port = 8080;

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
    express.static('public'),
    express.json(),
    require("./api/link.js"),
    require("./api/api.js"),

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
    console.log("Server is running~~\n\n\nhttp://localhost:" + port);
});