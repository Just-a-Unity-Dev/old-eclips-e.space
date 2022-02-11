const express = require('express');
const app = express();
const mongoose = require('mongoose')

const port = 8080;

app.use(
    express.static('public'),
    require("./routes/404.js")
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