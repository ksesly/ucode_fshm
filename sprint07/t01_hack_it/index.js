const express = require('express');
const session = require('express-session');
const crypto = require('crypto');
const fs = require('fs');

const app = express();

const host = 'localhost';
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'pakun',
    resave: false,
    saveUninitialized: true
}));


app.post('/clear-session', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/index.html')
});

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});
