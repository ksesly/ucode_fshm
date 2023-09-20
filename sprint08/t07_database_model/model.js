const db = require("../db");
const Model = require("../model");

module.exports = class Model {
    constructor(parameters) {
        this.parameters = parameters;
    }
    find(id) {
        connection.query(`SELECT * FROM ${this.model}.id WHERE id=${id}`, (err, rows) => {
            if(err) 
                throw err;
            else {
                console.log(rows);
            }
        });
    }
    async delete(id) {
        if (this.id) {
            await db.query(`DELETE FROM ${this.tableName} WHERE id = ?`, [this.id]);
        }
    }

    save() {
        return;
    }
}