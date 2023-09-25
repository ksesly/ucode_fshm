const Model = require('../model');

class User extends Model {
    constructor(table_name = 'users', login, fullName, email, password) {
		super(table_name, { login, fullName, email, password });
    }
    find(id) {
        return super.find(id);
    }
    delete(id) {
        return super.delete(id);
    }
    save() {
        return super.save();
    }
}
module.exports = User;