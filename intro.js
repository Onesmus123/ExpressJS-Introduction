const express = require("express");
const app = express();
const port = 3001;

//Root route
app.get("/", (req, res) => {
    res.send("Hello World!")
});

//Dynamic route
app.get("/name/:username", (req, res) => {
    res.status(200).type('html').send(`<html><body><h1>Hello ${req.params.username}!</h1></body></html>`);

})

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});