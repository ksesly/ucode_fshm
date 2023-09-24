const Model = require('./model');
const express = require('express');
// const fs = require('fs');

const app = express();

const host = 'localhost';
const PORT = process.env.PORT || 3000;

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/public/reg.html')
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});