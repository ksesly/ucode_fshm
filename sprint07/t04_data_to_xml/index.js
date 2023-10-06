const express = require('express');
const ListAvengerQuotes = require('./ListAvengerQuotes');

const app = express();
const host = 'localhost';
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {

    list = new ListAvengerQuotes();

    list.addAvanger(1, 'Lee', 'Great power is a great responsibility', 'spidey.jpg');
    list.addAvanger(2, 'Ditkovich', 'I am billioner, philantrop and etc', 'iron-man.jpg');

    console.log(list.toXml() + '\n');
    console.log(JSON.stringify(list.fromXML()));

    res.sendFile(__dirname + '/index.html');
});


app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});