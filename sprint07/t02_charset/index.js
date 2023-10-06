const express = require("express");
const iconv = require("iconv-lite");

const app = express();
const host = 'localhost';
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.post("/", (req, res) => {
    res.write(`<h1>Charset</h1>
        <form action="/" method="post">
        <span>Change charset</span>
        <input type="text" name="string" id="string" / required>

        <span>Select charset or several charsets</span>
        <select name="type" id="type" multiple>
            <option name="UTF-8" value="utf8">UTF-8</option>
            <option name="ISO-8859-1" value="ISO-8859-1">ISO-8859-1</option>
            <option name="Windows-1252" value="win1252">Windows-1252</option>
        </select>

        <button type="submit">Change charset</button>
        <button type="reset">Clear</button>
        </form>

        <span>Input string:</span>
        <textarea readonly>${req.body.string}</textarea><br>
        `);

    if (Array.isArray(req.body.type)) {
        req.body.type.forEach((element) => {
            res.write(`<span>${element}</span>
                <textarea readonly>${iconv.encode(
                    req.body.string,
                    element
                )}</textarea><br>`);
        });
    } else {
        res.write(`<span>${req.body.type}</span>
        <textarea readonly>${iconv.encode(
            req.body.string,
            req.body.type
        )}</textarea><br>`);
    }
    res.end();
});

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});
