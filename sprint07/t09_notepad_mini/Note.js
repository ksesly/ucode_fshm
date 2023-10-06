module.exports = class Note {
    constructor(id, name, importance, content, createdAt) {
        this.id = id;
        this.name = name;
        this.importance = importance;
        this.content = content;
        this.createdAt = createdAt;
    }
}

