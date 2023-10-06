const express = require('express');
const File = require('./File');
const FileList = require('./FileList');


const app = express();
const host = 'localhost';
const PORT = process.env.PORT || 3000;

const jsonParser = express.json();

const files = new FileList();

app.post('/', jsonParser, (req, res) => {
    if (files.hasFiles())  {
        res.json({list: files.getHTMLList()});
    }
});

app.post('/create', jsonParser, (req, res) => {
    let file = new File(req.body.str);
    file.write(req.body.content);
    res.json({list: files.getHTMLList()});
});

app.post('/read', jsonParser, (req, res) => {
    let str = (new File(req.body.filename)).read();

    res.json({ filename: req.body.filename,
        content: str});
});

app.post('/delete', jsonParser, (req, res) => {
    let file = new File(req.body.del);

    file.delete();

    if (files.hasFiles())  {
        res.json({list: files.getHTMLList()});
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get("/script.js", (req, res) => {
    res.sendFile(__dirname + '/script.js');
});

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});
