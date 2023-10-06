const Note = require('./Note');

module.exports = class NotePad {
    constructor(filePath) {
        this.filePath = filePath;
        this.notes = this.loadNotes();
    }

    loadNotes() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    saveNotes() {
        const data = JSON.stringify(this.notes);
        fs.writeFileSync(this.filePath, data);
    }

    addNote({ name, importance, content }) {
        const id = Date.now().toString();
        const createdAt = new Date().toLocaleString();
        const note = new Note(id, name, importance, content, createdAt);
        this.notes.push(note);
        this.saveNotes();
    }

    getAllNotes() {
        return this.notes;
    }

    getNoteById(id) {
        return this.notes.find(note => note.id === id);
    }

    deleteNoteById(id) {
        const index = this.notes.findIndex(note => note.id === id);
        if (index !== -1) {
            this.notes.splice(index, 1);
            this.saveNotes();
        }
    }
}


