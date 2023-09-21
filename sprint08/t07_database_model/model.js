const pool = require("./db");

class Model {
    constructor(table_name, attributes) {
        this.table_name = table_name || 'heroes';
        this.attributes = attributes || {};
    }

    async find(id) {
        try {
            const [rows] = await pool.query(`SELECT * FROM ${this.table_name} WHERE id = ?`, [id]);
            if (rows.length === 1) {
                this.attributes = rows[0];
                return this;
            }
            return null;
        } 
        catch (error) {
            throw error;
        }
    }

    async delete(id) {
        if (!id) {
            throw new Error('Object must have an ID for deletion.');
        }

        try {
            await pool.query(`DELETE FROM ${this.table_name} WHERE id = ?`, [id]);
        } 
        catch (error) {
            throw error;
        }
    }

    async save() {
        if (this.attributes.id) {
            const fields = Object.keys(this.attributes).filter(field => field !== 'id');
            const values = fields.map(field => this.attributes[field]);
            values.push(this.attributes.id);

            const setFields = fields.map((field) => `${field} = ?`).join(', ');

            const query = `UPDATE ${this.table_name} SET ${setFields} WHERE id = ?`;

            try {
                await pool.query(query, [...values, this.attributes.id]);
            } catch (error) {
                throw error;
            }
        } 
        else {
            const fields = Object.keys(this.attributes);
            const values = fields.map(field => this.attributes[field]);

            const placeholders = fields.map(() => '?').join(', ');

            const query = `INSERT INTO ${this.table_name} (${fields.join(', ')}) VALUES (${placeholders})`;

            try {
                const [result] = await pool.query(query, values);
                if (result.affectedRows === 1) {
                    this.attributes.id = result.insertId;
                }
            } catch (error) {
                throw error;
            }
        }
    }
}

module.exports = Model;

const modelInstance = new Model('heroes', { name: 'Ksushka pushka', description: 'push' });

console.log('Testing find method...');
modelInstance.find(11)
    .then((result) => {
        console.log('Found result:', result);
    })
    .catch((error) => {
        console.error('Find failed:', error);
    });

    
// console.log('Testing delete method...');
// modelInstance.delete(3) 
//     .then(() => {
//         console.log('Delete successful');
//     })
//     .catch((err) => {
//         console.error('Delete failed:', err);
//     });
    
    
// console.log('Testing save method...');
// const result = modelInstance.save();
// console.log('Save result:', result);