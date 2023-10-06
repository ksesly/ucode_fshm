module.exports = class AvengerQuote {
    constructor(id, author, quote, photo) {
        this.id = id;
        this.quote = quote;
        this.photo = photo;
        this.author = author;
        this.publishDate = Date();
    }
    
    addComment(comment) {
        this.comments.push(new Comment(comment));
    }
}

// module.exports = AvengerQuote;