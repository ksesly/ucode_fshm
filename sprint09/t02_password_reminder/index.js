const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const pool = require('./db');

const app = express();
const host = 'localhost';
const PORT = process.env.PORT || 3000;

const JWT_SECRET = 'ILoveWatchingSupernaturaleAndDrinkCoffeeWithCreamPIPIPUPAPIPIPUP';

const User = require('./models/user');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const protected = async (req) => {
	let token;
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1];
	} else return { status: false };
	if (!token) {
		return { status: false };
	}
	const decoded = await promisify(jwt.verify)(token, JWT_SECRET);
	let user = new User({ id: decoded.id });
	if (!user.find(decoded.id)) {
		return { status: false };
	}
	return { status: true, user: user };
};

app.post('/', async (req, res) => {
	let user = new User(req.body);
	let resp = await user.findByEmailAndSendEmail(user.email);
	res.end(resp.status === 200 ? 'Successfully sended' : resp.e);
});

app.get('/', async (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});
