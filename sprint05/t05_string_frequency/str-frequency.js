module.exports = class StrFrequency {
    constructor(str) {
        this.str = str;
    }
    letterFrequencies() {
        // TODO: count frequency of each letter in str 
        
        const frequencies = {};
        [...this.str].forEach(i => {
            if (/[a-zA-Z]/.test(i)) 
                frequencies[i.toUpperCase()] = (frequencies[i.toUpperCase()] || 0) + 1;
        });
        return frequencies;
    };
    wordFrequencies() {
        // TODO: count frequency of each word in str
        const array = this.str.split(' ');
        const frequencies = {};
        array.forEach(i => {
            if (/[a-zA-Z]/.test(i) || i === "") 
                frequencies[i.toUpperCase()] = (frequencies[i.toUpperCase()] || 0) + 1;
        });
        return frequencies;
    };
    reverseString() {
        // TODO: to inverts the order of letters in the string
        return this.str.split('').reverse().join('');
    };
};