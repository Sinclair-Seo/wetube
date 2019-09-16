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

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Welcome WeTube Home!");

const handleProfile = (req, res) => res.send("You're on my profile now.");

const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
}

app.get("/", handleHome);

app.use(betweenHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
