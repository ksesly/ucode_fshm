class Func extends Function {
    constructor() {
        super('...args', 'return this.temp.alias.toUpperCase() + String.fromCharCode(10) + this.temp.powers.join(String.fromCharCode(10))');
        return this.temp = this.bind(this);
    }
}


module.exports = class Avengers extends Func {
    constructor({ name, alias, gender, age, powers = [], hp }) {
        super();
        this.Lname = name;
        this.alias = alias;
        this.gender = gender;
        this.age = age;
        this.powers = powers;
        this.hp = hp
    }

    toString() {
        return `name: ${this.Lname}\ngender: ${this.gender}\nage: ${this.age}`;
    }
}