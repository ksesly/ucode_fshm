const Model = require('../model');

module.exports = class Hero extends Model {
    model = "heroes";
    constructor(id, name, class_role, race_id){
        this.id = id;
        this.name = name;
        this.class_role = class_role;
        this.race_id = race_id;
    }
    find(id){
        super.find(id);
    }
    delete(id){
        super.delete(id);
    }
    save(){
        var buff = {};
        db.query(`SELECT * FROM ${model} WHERE id=${this.id}`, (err, result) => {
            if (result){
                buff = result;
            }
            if (err){
                console.log(err);
                exit();
            }
        });
        if (buff.length > 0){
            db.query(`UPDATE ${model} SET id=${this.id}, name=${this.name}, class_role=${this.class_role}, race_id=${this.race_id}`, (err, result) => {
                if (err) {
                    console.log(err);
                    exit();
                }
            });
        }
        else {
            db.query(`INSERT INTO ${model}(id, name, class_role, race_id) VALUES (${this.id}, ${this.name}, ${this.class_role}, ${this.race_id})`, (err, result) => {
                if (err){
                    console.log(err);
                    exit();
                }
            })
        }
    }
}