const express = require('express');
const app = express();
const port = 8080;

app.use(
    require("./routes/404.js")
);

app.get('/', (req, res) => {
    res.sendFile(__dirname + './public/index.html')
});

app.listen(port, () => {
    console.log("Server is running~~\n\n\nhttp://localhost" + port);
});