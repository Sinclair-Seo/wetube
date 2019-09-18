//const express = require('express');
import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Welcome WeTube Home!");

const handleProfile = (req, res) => res.send("You're on my profile now.");


app.get("/", handleHome);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(logger("combined"));

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
