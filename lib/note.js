const fs = require('fs');
const path = require('path');

// function to store note in db
function storeNote(arr) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(arr, null)
    );
};

// function to add new note
function addNote(note, arr) {
    arr.push(note);
    storeNote(arr);
};

// function to get note
function getNote(note, arr) {
    return arr.filter(notes => notes.note === note)[0];;
};

module.exports = { getNote, addNote };