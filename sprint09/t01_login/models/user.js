const jwt = require('jsonwebtoken');

const Model = require('../model');
const pool = require('../db');
const JWT_SECRET = 'Mishka_TishkaIsTheBestInTheWorldLolItNeedMoreCharactersAHAHAHAHA';
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
}
module.exports = User;
