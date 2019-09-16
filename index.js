const express = require('express');
const app = express();

const PORT = 4000;

function handlelistening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handlehome(req, res) {
    //console.log(req);
    res.send('Welcome WeTube Home');
}

function handleprofile(req, res){
    res.send("You're on my profile now.");
}

app.get("/", handlehome);
app.get("/profile", handleprofile);

app.listen(PORT, handlelistening);