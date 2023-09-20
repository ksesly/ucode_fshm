const express = require('express');
const session = require('express-session');
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
    // cookie: { secure: true }
}))

app.post('/hero-form', (req, res) => {
    const heroRealName = req.body.heroRealName;
    const heroAlias = req.body.heroAlias;
    const heroAge = req.body.heroAge;
    const heroDescription = req.body.heroDescription;
    const heroPhoto = req.body.heroPhoto;
    const heroExp = (req.body.powers || []).length;
    const heroLevel = req.body.heroLevel;
    const heroPurpose = req.body.rad;
    if (req.session.heroData) {
        const sessionData = req.session.heroData;
        res.render('form', sessionData); 
    } else {
        fs.readFile(__dirname + '/form.html', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error reading the HTML file.');
            } else {
                data = data.replace('{{heroRealName}}', heroRealName);
                data = data.replace('{{heroAlias}}', heroAlias);
                data = data.replace('{{heroAge}}', heroAge);
                data = data.replace('{{heroDescription}}', heroDescription);
                data = data.replace('{{heroPhoto}}', heroPhoto);
                data = data.replace('{{heroExp}}', heroExp);
                data = data.replace('{{heroLevel}}', heroLevel);
                data = data.replace('{{heroPurpose}}', heroPurpose);
                res.send(data);
            }
        });
    }
});

app.get('/clear-session', (req, res) => {
    req.session.heroData = null; 
    res.redirect('/'); 
});

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/index.html')
});

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});

