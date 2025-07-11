const express = require("express");
const app = express();
const port  = 3001;

// Global request logger
app.use((req, res, next) => {
    console.log(`Request received at: ${new Date().toISOString()}`);
    next();
});

// Middleware for "/home" path
app.use("/home", (req, res, next) => {
    console.log(`Request on "/home" at: ${new Date().toISOString()}`);
    next();
});

// Root route
app.get("/", (req, res) => {
    res.send("Hello world!");
});

// Specific GET route for "/home"
app.get("/home", (req, res) => {
    res.send("Welcome to Homepage.");
});

// Start server
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
