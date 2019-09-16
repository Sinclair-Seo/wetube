//const express = require('express');
import express from "express";
const app = express();

const PORT = 4000;

/*
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
*/

const handlelistening = () => console.log(`Listening on: http://localhost:${PORT}`);
const handlehome = (req, res) => res.send("Welcome WeTube Home!");
const handleprofile = (req, res) => res.send("You're on my profile now.");

app.listen(PORT, handlelistening);
app.get("/", handlehome);
app.get("/profile", handleprofile);