const pool = require('./db');

class Model {
	constructor(args) {
		const keys = Object.keys(args);
		const values = Object.values(args);
		for (let i = 0; i < keys.length; i++) this[keys[i]] = `${values[i]}`;
	}
	async find(id) {
		try {
			const rows = await pool.execute(`SELECT * FROM ${this.tableName} WHERE id=${id}`);
			if (rows.length > 0) {
				const keys = Object.keys(rows[0][0]);
				const values = Object.values(rows[0][0]);
				for (let i = 0; i < keys.length; i++) this[keys[i]] = `${values[i]}`;
				return true;
			}
		} catch (e) {
			throw e;
		}
	}
	async delete() {
		try {
			if (this.id && this.find(this.id)) {
				await pool.execute(`DELETE FROM ${this.tableName} WHERE id=${this.id}`);
				return true;
			}
		} catch (error) {
			throw error;
		}
		return false;
	}
	async save() {
		try {
			let updateList = Object.assign({}, this);

			delete updateList.tableName;
			const columns = Object.keys(updateList).join(', ');
			const values = Object.values(updateList).map((val) => `'${val}'`);

			if (this.id && this.find(this.id)) {
				await pool.execute(`UPDATE ${this.tableName} SET ${updateList} WHERE id=${this.id}`);
			} else {
				await pool.execute(`INSERT INTO ${this.tableName} (${columns}) VALUES (${values})`);
			}
			return true;
		} catch (e) {
			return e;
		}
	}
}

module.exports = Model;
