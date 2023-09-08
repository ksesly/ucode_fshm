// module.exports = class Tutu {
//     constructor(name, alias, affiliation) {
//         this.name = name;
//         this.alias = alias;
//         this.affiliation = affiliation;
//     };
//     static getAnonymous(name, alias, affiliation) {
//         return new Tutu(name, alias, affiliation);
//     };
// };

module.exports = anonClass = class {
    #name;
    #alias;
    #affiliation;
    constructor(name, alias, affiliation) {
        this.#name = name;
        this.#alias = alias;
        this.#affiliation = affiliation;
    };
    
    get name() { return this.#name };
    get alias() { return this.#alias };
    get affiliation() { return this.#affiliation };

    
};

module.exports = { getAnonymous(name, alias, affiliation) {
        return new anonClass(name, alias, affiliation);
    }
}

