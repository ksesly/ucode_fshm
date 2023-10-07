const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const Model = require('../model');
const pool = require('../db');

var transport = nodemailer.createTransport({
	host: "sandbox.smtp.mailtrap.io",
	port: 2525,
	auth: {
	  user: "a174ec0a7718c7",
	  pass: "898c38d288487b"
	}
});

const JWT_SECRET = 'ILoveWatchingSupernaturaleAndDrinkCoffeeWithCreamPIPIPUPAPIPIPUP';
const JWT_EXPIRES_IN = '90d';

const signToken = (id) => {
	return jwt.sign({ id }, JWT_SECRET, {
		expiresIn: JWT_EXPIRES_IN,
	});
};

const createAndSendToken = (id, statucCode, res) => {
	const token = signToken(id);
	res.status(statucCode).json({
		status: 'success',
		token,
	});
};

class User extends Model {
	constructor(args) {
		super(args);
		this.tableName = 'users';
	}
	async loginToSystem(res) {
		try {
			const rows = await pool.execute(`SELECT * FROM ${this.tableName} WHERE login="${this.login}"`);
			if (rows.length > 0) {
				return createAndSendToken(rows[0][0].id, 301, res);
			}
		} catch (e) {
			throw e;
		}
	}
	async findByEmailAndSendEmail(email) {
		try {
			const rows = await pool.execute(`SELECT * FROM ${this.tableName} WHERE email="${email}"`);
			console.log(rows, rows.length, rows[0][0]);
			if (rows.length > 1 && rows[0][0]) {
				const info = await transport.sendMail({
					from: '"Ks" ks.you.04@gmail.com',
					to: `${rows[0][0].email}`, 
					subject: 'Hello ✔', 
					text: `Your password is ${rows[0][0].password}`,
				});
				return { status: 200 };
			}
			return { status: 400, e: 'something went wrong' };
			// rows[0][0].password
		} catch (e) {
			return { status: 400, e };
		}
	}
}
module.exports = User;
