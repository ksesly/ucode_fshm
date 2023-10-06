const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const NotePad = require('./NotePad');

const app = express();
const host = 'localhost';
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

const notesFile = 'notes.json';
const notePad = new NotePad(notesFile);

app.get('/', (req, res) => {
    const notes = notePad.getAllNotes();
    let html = fs.readFileSync('index.html', 'utf-8');
    let notesList = '';
    notes.forEach((note) => {
        notesList += `<li>${note.createdAt} > ${note.name}`;
        notesList += `<a href="/viewNote/${note.id}">View</a>`;
        notesList += `<a href="/deleteNote/${note.id}">Delete</a></li>`;
    });
    html = html.replace('<ul></ul>', `<ul>${notesList}</ul>`);
    res.send(html);
});

app.post('/addNote', (req, res) => {
    const { name, importance, content } = req.body;
    notePad.addNote({ name, importance, content });
    res.redirect('/');
});

app.get('/viewNote/:id', (req, res) => {
    const note = notePad.getNoteById(req.params.id);
    if (note) {
        let html = '<h1>Notes App</h1>';
        html += '<h2>Note Details:</h2>';
        html += `<p>Created At: ${note.createdAt}</p>`;
        html += `<p>Name: ${note.name}</p>`;
        html += `<p>Importance: ${note.importance}</p>`;
        html += `<p>Content: ${note.content}</p>`;
        html += `<a href="/">Back to Notes</a>`;
        res.send(html);
    } else {
        res.status(404).send('Note not found.');
    }
});

app.get('/deleteNote/:id', (req, res) => {
    notePad.deleteNoteById(req.params.id);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server start on http://${host}:${PORT}`);
});