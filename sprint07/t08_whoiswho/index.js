const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const host = 'localhost';
const PORT = process.env.PORT || 3000;
const jsonParser = express.json();

app.use(express.static(__dirname)); 

app.post('/', jsonParser, async (req, res) => {
    console.log(req.body.filter);
    let response = req.body.myFile.split('\\');
    const words = await parseCSV(response[response.length - 1]);
    let keys = Object.keys(words[0]);

    let headHTML = '';

    for (let i = 0; i < keys.length; i++) {
        headHTML += `<th>${keys[i]}</th> `;
    }

    let bodyHTML = '';

    for (let i = 0; i < words.length; i++) {
        let val = Object.values(words[i]);

        bodyHTML += `<tr>`;
        for (let j = 0; j < val.length; j++) {
            if (req.body.filter != 'None' && words[i].Alignment == req.body.filter) {
                bodyHTML += `<td>${val[j]}</td>`;
            }
            if (req.body.filter == 'None') {
                bodyHTML += `<td>${val[j]}</td>`;
            }

        }
        bodyHTML += `</tr>`;
    }

    res.json({ headHTML: headHTML, bodyHTML: bodyHTML });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/script.js');
});

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});


async function parseCSV(path) {
    return new Promise((resolve, reject) => {
        const words = [];

        fs.createReadStream(path)
            .pipe(csv({ delimiter: ',' }))
            .on('data', function (csvrow) {
                words.push(csvrow);
            })
            .on('end', function () {
                resolve(words);
            })
            .on('error', function (err) {
                reject(err);
            });
    });
}



