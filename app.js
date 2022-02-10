const express = require('express')
const app = express();
const port = 8080;

app.use(
    require("./routes/404.js")
)

app.listen(port, () => {
    console.log("Server is running~~\n\n\nhttp://localhost" + port);
});