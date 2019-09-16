const express = require('express');
const app = express();

const PORT = 5000;

function handlelistening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handlelistening);