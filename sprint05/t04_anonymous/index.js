module.exports = class Tutu {
    constructor(name, alias, affiliation) {
        this.name = name;
        this.alias = alias;
        this.affiliation = affiliation;
    };
    static getAnonymous(name, alias, affiliation) {
        return new Tutu(name, alias, affiliation);
    };
};


