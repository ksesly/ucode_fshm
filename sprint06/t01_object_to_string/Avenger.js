class Func extends Function {
    constructor() {
        super('...args', `return this.temp.alias.toUpperCase() + String.fromCharCode(10) + this.getPowerList()`);
        const temp = this.bind(this);
        this.temp = temp;
        return temp;
    }

    getPowerList() {
        if (this.temp.powers && Array.isArray(this.temp.powers)) {
            return this.temp.powers.join(String.fromCharCode(10));
        } else {
            return "";
        }
    }
}

module.exports = class Avengers extends Func {
    constructor({ name, alias, gender, age, powers = [] }) {
        super();
        this.Lname = name;
        this.alias = alias;
        this.gender = gender;
        this.age = age;
        // this.temp = [];
        this.powers = powers;
    }

    toString() {
        return `name: ${this.Lname}\ngender: ${this.gender}\nage: ${this.age}`;
    }

    invokePowers() {
        const powersList = this.getPowerList();
        return `${this.alias.toUpperCase()}\n${powersList}`;
    }
}
