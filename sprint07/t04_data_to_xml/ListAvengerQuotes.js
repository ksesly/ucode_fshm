const fs = require('fs');
const xml2js = require('xml2js');
const AvengerQuote = require('./AvengerQuote');

module.exports = class ListAvengerQuotes {
    constructor() {
        this.list = [];
    }
    
    addAvanger(id, author, quote, photo) {
        this.list.push(new AvengerQuote(id, author, quote, photo));
    }
    
    toXml() {
        let a = '<Quotes>\n' +
            this.list.reduce((result, el) => {
                return result + `<${el.author}><id>${el.id}</id>\
                    <author>${el.author}</author>\
                    <quote>${el.quote}</quote>\
                    <publishDate>${el.publishDate}</publishDate></${el.author}>\n`;
            }, '') +
            '</Quotes>';
        fs.writeFileSync('avenger_quote.xml', a);
    }
    
    fromXML() {
        let str;
        let xmlFile = fs.readFileSync('./avenger_quote.xml', 'utf8');
        xml2js.parseString(xmlFile, (error, result) => {
            str = result;
        });
        return str.Quotes;
    }
}

