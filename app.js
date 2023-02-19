const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Auto scaling app in Node.js >> AWS<h1/> <p>Version: 1.0.0<p/>")
})

app.listen(port, () => {
    console.log("App is up and running on port 3000 ${port}");
})