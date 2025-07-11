// Routing refers to determining how an application responds to a client request, at a particular endpoint

const express = require("express");
const app = express();
const port = 3001;

// GET method route
app.get("/", (req, res) => {
    res.send({name: "Onesmus Mutyauvyu"});
});

// POST method route
app.post("/", (req, res) => {
    res.send("POST request to the Homepage.");
})

// app.all() - a special routing method, used to load middleware functions at a path for all HTTP request methods.
app.all("/secret", (req, res, next) => {
    console.log("Accessing a secret connection ...");
    next();
});

// Route parameters
app.get("/users/:userId/posts/:postId", (req, res) => {
    const { userId, postId } = req.params;
    res.status(200).json({
        userId,
        postId
    });
});


app.listen(port, () => {
    console.log(`Server runnimng on: htpp://localhost:${port}`);
});