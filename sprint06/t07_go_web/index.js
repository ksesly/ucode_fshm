const express = require('../t05_a_new_set/node_modules/express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

const normal = require('./normal-router');
const quantum = require('./quantum-router');

const normalTime = normal.calculateTime();
const quantumTime = quantum.calculateTime();

app.get('/', (request, response) => {
    response.render('index', { title: 'Main page' });
});

app.get('/normal', (request, response) => {
    response.render('normal', {
        year: normalTime.years(),
        month: normalTime.months(),
        day: normalTime.days()
    });
});

app.get('/quantum', (request, response) => {
    response.render('quantum', {
        year: quantumTime[0],
        month: quantumTime[1],
        day: quantumTime[2]
    });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
