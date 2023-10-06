const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const pool = require('./db');

const host = 'localhost';
const PORT = process.env.PORT || 3000;



const JWT_SECRET = 'Mishka_TishkaIsTheBestInTheWorldLolItNeedMoreCharactersAHAHAHAHA';
const app = express();
const User = require('./models/user');
app.use(express.static('public'));
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
	// Validate token
	const decoded = await promisify(jwt.verify)(token, JWT_SECRET);
	let user = new User({ id: decoded.id });
	if (!user.find(decoded.id)) {
		return { status: false };
	}
	return { status: true, user: user };
};

app.post('/login', async (req, res) => {
	// console.log(JSON.parse(req.body));
	let user = new User(req.body);
	user.token = await user.loginToSystem(res);
});
app.get('/login', async (req, res) => {
	// console.log(req.headers.cookie);
	if (req.headers.cookie.search(/authorization/) > 0) {
		// console.log('JOPA');
		req.headers['authorization'] = req.headers.cookie
			.slice(req.headers.cookie.search('authorization'))
			.replace('authorization=', '');
	}
	let user = await protected(req);
	
	if (user.status === false) {
		// console.log('nifiga');
		res.sendFile(__dirname + '/public/index.html');
	} else {
		let currUser = new User({ id: user.user.id });
		await currUser.find(currUser.id);
		console.log(currUser);
		res.end(`<h1>Logged in!</h1>
		<div><p>status: ${currUser.status}</p><p>name: ${currUser.fullname}</p><p>login: ${currUser.login}</p>
		</div><button onclick="document.cookie = 'authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
	window.location.href = '/login';">log out</button>`);
	}
});

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});
