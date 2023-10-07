
const app = require('./app');
const express = require('express');

const host = 'localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});

module.exports = app;
