const fs = require('fs');
const express = require('express');
const session = require('express-session');
const hashes = require('jshashes');
const SHA1 = new hashes.SHA1;


const app = express();
const host = 'localhost';
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'hack-it',
    resave: false,
    saveUninitialized: false,
}));

app.get('/', (req, res) => {
    if (req.session.hashedPassword) {
        const userHtml = fs.readFileSync('hacking.html', 'utf-8');
        let updatedHtml = userHtml.replace('%s', req.session.hackStatus || '');
        res.send(updatedHtml);
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.post('/save', (req, res) => {
    const password = req.body.password;
    const salt = req.body.salt;

    if (password && salt) {
        const hashedPassword = createPasswordHash(password, salt);
        req.session.hashedPassword = hashedPassword;
        req.session.salt = salt;
        res.redirect('/');
    } else {
        res.redirect('/');
    }
});

app.post('/hack', (req, res) => {
    const salt = req.session.salt;
    const guess = req.body.guess;
    const hashedPassword = req.session.hashedPassword;
    
    if (createPasswordHash(guess, salt) === hashedPassword) {
        req.session.destroy();
        res.redirect('/hacked');
    } else {
        req.session.hackStatus = 'denied'; 
        res.redirect('/');
    }
});

app.get('/hacked', (req, res) => {
    res.sendFile(__dirname + '/alreadyhacked.html');
});

app.post('/clear', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});


function createPasswordHash(password, salt) {
    return SHA1.hex(password + salt);
}
