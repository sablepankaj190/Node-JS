const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "getting notes...";
}

const addNotes = (title, body) => {
    const notes = loadNotes();

    const existingNote = notes.find((note) => note.title == title);
    if (existingNote) {
        console.log("Note title exists");
    } else {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("New Note added!");
    }
}

const saveNotes = (notes) => {
    const jsonString = JSON.stringify(notes);
    fs.writeFileSync('notes.json', jsonString);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const existingNoteIndex = notes.findIndex((note) => note.title == title);
    if (existingNoteIndex >= 0) {
        notes.splice(existingNoteIndex, 1);
        console.log(chalk.green.inverse("Note with given title removed"));
        saveNotes(notes);
    } else {
        console.log(chalk.yellow.inverse("Title does not exist"))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse("Your Notes: \n"));
    notes.forEach(note => {
        console.log(chalk.green(note.title));
    });
    debugger;
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((n) => n.title == title);
    if (note) {
        console.log(chalk.green(note.title) + ", " + chalk.green(note.body));
    } else {
        console.log(chalk.yellow.inverse("Note with given title does not exist"))

    }
}

module.exports = {
    addNotes,
    removeNote,
    listNotes,
    readNote
}