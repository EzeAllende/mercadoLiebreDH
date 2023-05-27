const express = require("express");
const app = express ();

const path = require ("path");
const publicPath = path.join(__dirname, './public');

app.use (express.static (publicPath));

app.listen (3030, () => {console.log("Servidor Corriendo")});

app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});
