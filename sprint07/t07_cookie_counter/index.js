const express = require('express');
const session = require('express-session');

const app = express();
const host = 'localhost';
const PORT = process.env.PORT || 3000;

const jsonParser = express.json();

app.use(
    session({
        secret: 'cookie-counter',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 3600 },
    })
);

app.post('/', jsonParser, (req, res) => {
    req.session.counter = (req.session.counter || 0) + 1;
    res.json({ counter: req.session.counter });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname +'/script.js');
});

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});