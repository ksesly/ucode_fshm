// TODO: Create a classAccess with the following behavior:
//      •when the propertymark_LXXXVhasn't been set, return'undefined'
//      •when set tonull, return'null'
//      •otherwise, return the value

module.exports = class Access {
    constructor() {
        this.code = undefined;
    };
    get mark_LXXXV() {
        if (this.code === null) 
            return "null";
        else if (this.code === undefined) 
            return "undefined";
        else 
            return this.code;
    };
    set mark_LXXXV(val) {
        this.code = val;
    };
};