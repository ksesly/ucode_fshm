const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const User = require('./models/user');

const pool = require('./db');

const host = 'localhost';
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/register', async (req, res) => {
	let user = new User(req.body);
	let saved = await user.save();
	if (saved === true) {
		res.status(200).json({
			message: 'success',
			body: req.body,
		});
	} else {
		res.status(400).json({
			message: saved.sqlMessage || 'something went wrong',
		});
	}
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});


app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});
