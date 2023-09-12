const express = require('express');

const app = express();

const jsonParser = express.json();

const POST = 3000;


app.post('/', jsonParser, function (request, response) {
    if (!request.body) {
        return response.sendStatus(400);
    }

    response.json({ name: request.body.name === '' ? 'NONE' : request.body.name,
        email: request.body.email === '' ? 'NONE' : request.body.email,
        age: request.body.age === '' ? 'NONE' : request.body.age,
        description: request.body.description === '' ? 'NONE' : request.body.description,
        photo: request.body.photo === '' ? 'NONE' : request.body.photo,
    });


});


app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/script.js', function (request, response) {
    response.sendFile(__dirname + '/script.js');
});

app.get('/style.css', function (request, response) {
    response.sendFile(__dirname + '/style.css');
});

app.listen(POST, () => {
    console.log(`Server start on http://localhost:${POST}`);
});