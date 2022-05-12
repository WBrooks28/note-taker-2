const router = require('express').Router();
const { getNote, addNote, notes } = require('../lib/note.js');

// create note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = addNote(req.body, notes);
    res.json(note);
});

// get all notes
router.get('/notes', (req, res) => {
    return res.json(notes);
});

// get note by id
router.get('/notes/:id', (req, res) => {
    const note = getNote(req.params.id, notes);
    if (result) {
        res.json(note);
    } else {
        res.send(404);
    }
});

module.exports = router;