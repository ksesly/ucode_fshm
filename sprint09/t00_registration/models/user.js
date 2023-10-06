const Model = require('../model');

class User extends Model {
	constructor(args) {
		args.tableName = 'users';
		console.log(args);
		super(args);
	}
}
module.exports = User;
