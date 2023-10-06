const express = require('express');
const axios = require('axios');

const app = express();
const host = 'localhost';
const PORT = process.env.PORT || 3000;
const jsonParser = express.json();

app.post('/', jsonParser, async (req, resp) => {
    console.log(req.body);
    const html = await axios.get(req.body.url);

    let content = JSON.stringify(html.data);

    let res = JSON.parse(content);
    let body = res.slice(res.indexOf('<body>') + 6, res.indexOf('</body>'));

    resp.json({ html: body, url: req.body.url });
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