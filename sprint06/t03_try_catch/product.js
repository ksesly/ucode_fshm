let EatException = require('./eat-exception')

module.exports = class Product {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    check() {
        if (this.size > 200) {
            throw new EatException();
        }
    }
}


