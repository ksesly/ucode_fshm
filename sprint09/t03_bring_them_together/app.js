const express = require('express');
const bodyParser = require('body-parser');

const ejs = require('ejs');

const app = express();
const User = require('./models/user');
const protected = require('./protected');

app.use(express.json());
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: true }));

app.route('/login')
	.post(async (req, res) => {
		let user = new User(req.body);
		user.token = await user.loginToSystem(res);
	})
	.get(async (req, res) => {
		let user = await protected(req);
		if (user.status === false) {
			res.render(__dirname + '/views/login.html', {
				status: undefined,
				header: undefined,
			});
		} else {
			let currUser = new User({ id: user.user.id });
			await currUser.find(currUser.id);
			console.log(currUser);
			res.render(__dirname + '/views/login.html', {
				// name: currUser.fullname,
				// login: currUser.login,
				// email: currUser.email,
				header: 'You are logged in!',
			});
		}
	});
app.route('/homepage').get(async (req, res) => {
	const tmp = await protected(req);
	let currUser = new User({ id: await tmp.user.id });
	await currUser.find(currUser.id);
	res.render(__dirname + '/views/homepage.html', {
		status: currUser.status,
		login: currUser.login,
		name: currUser.fullname,
		email: currUser.email,
	});
});

app.route('/register')
	.post(async (req, res) => {
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
	})
	.get((req, res) => {
		res.sendFile(__dirname + '/views/registration.html');
	});

app.route('/reminder')
	.post(async (req, res) => {
		let user = new User(req.body);
		let mail = await user.findByEmailAndSendEmail(user.email);
		try {
			console.log(mail.info);
		} catch (e) {
			console.log(mail.e);
		}
		res.redirect('/');
	})
	.get(async (req, res) => {
		let authorized = await protected(req);
		if (authorized.status) res.sendFile(__dirname + '/views/reminder.html');
		else res.redirect('./login');
	});

app.route('/').get(async (req, res) => {
	let authorized = await protected(req);
	if (authorized.status) res.redirect('./homepage');
	else res.redirect('./login');
});

app.all('*', (req, res, next) => {
	res.render(__dirname + '/views/error.html', {
		error: `Can't find ${req.originalUrl} on this server :# Please use only /login /register /homepage /reminder`,
	});
});

module.exports = app;
