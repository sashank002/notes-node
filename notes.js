const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "your notes ....";
};

// _________________________FUNCTION TO READ NOTE_____________________________________________
const readNote = function (title) {
  const notes = loadNotes();
  const note = notes.find((n) => n.title === title);
  if (note) {
    console.log(chalk.green(note.title));
    console.log(note.body);
  } else {
    console.log("note not exist");
  }
};

// _________________________FUNCTION FOR LIST NOTES_____________________________________________
const listNotes = function () {
  const notes = loadNotes();
  console.log(chalk.yellow.bold("MY NOTES : "));
  notes.forEach((note, index) => {
    console.log(
      chalk.blue(`${index + 1} . TITLE : ${note.title} , BODY : ${note.body}`)
    );
  });
};

// _________________________FUNCTION FOR REMOVE NOTE_____________________________________________
const removeNote = function (title) {
  const notes = loadNotes();
  const note = notes.filter((n) => n.title === title);
  if (note.length === 1) {
    const finalnotes = notes.filter((n) => n.title !== title);
    saveNotes(finalnotes);
    console.log(
      chalk.green.inverse(
        `note of title ${title} has been removed successfully !`
      )
    );
  } else {
    console.log(chalk.red.inverse("note does not exist "));
  }
};

// _________________________FUNCTION FOR ADD NOTE_____________________________________________
const addNotes = function (title, body) {
  const notes = loadNotes();

  // checking if note title is already exists or not ?
  const druplicate = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("NOte added successfully");
  } else {
    console.log("Note title is already taken !");
  }
};

// _________________________FUNCTION TO SAVE NOTES_____________________________________________
const saveNotes = function (notes) {
  const noteJson = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", noteJson);
};

// _________________________FUNCTION TO LOAD ALL NOTEs_____________________________________________
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("./notes.json");
    const dataJSON = dataBuffer.toString();
    const notes = JSON.parse(dataJSON);
    return notes;
  } catch (err) {
    return [];
  }
};

module.exports = {
  addNotes: addNotes,
  getNotes: getNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
