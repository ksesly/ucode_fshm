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

// app.get('/', (req, res) => {
//     const data = {
//         hashedPassword: req.session.hashedPassword || null,
//         message: req.session.message || null,
//         color: req.session.messageColor || 'black'
//     };

//     fs.readFile(__dirname + '/index.html', 'utf8', (err, htmlData) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error reading the HTML file.');
//         } else {
//             htmlData = htmlData.replace('{{hashedPassword}}', data.hashedPassword || '');
//             htmlData = htmlData.replace('{{messageColor}}', data.color || 'black');
//             htmlData = htmlData.replace('{{message}}', data.message || '');
//             res.send(htmlData);
//         }
//     });
// });

// app.post('/save-password', (req, res) => {
//     const password = req.body.password;
//     const salt = req.body.salt;

//     // Hash the password with salt
//     const hashedPassword = crypto.createHash('sha256').update(password + salt).digest('hex');

//     // Store the hashed password in the session
//     req.session.hashedPassword = hashedPassword;
//     req.session.message = null;
//     req.session.messageColor = 'black';

//     res.redirect('/');
// });

// app.post('/guess-password', (req, res) => {
//     const guess = req.body.guess;
//     const storedHashedPassword = req.session.hashedPassword;

//     // Hash the guessed password with the same salt
//     const guessedHashedPassword = crypto.createHash('sha256').update(guess + req.body.salt).digest('hex');

//     if (guessedHashedPassword === storedHashedPassword) {
//         req.session.message = 'Hacked!';
//         req.session.messageColor = 'green';
//         req.session.hashedPassword = null; // Clear the hashed password
//     } else {
//         req.session.message = 'Access denied!';
//         req.session.messageColor = 'red';
//     }

//     res.redirect('/');
// });

app.post('/clear-session', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});
