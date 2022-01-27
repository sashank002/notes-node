const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");
// import validator from "validator";

// fs.writeFileSync("output.txt", "hYE ");

// fs.appendFileSync("output.txt", "kem cho ? ");

// const name = require("./utils.js");
// console.log(name);

// import getNotes from "./notes";

// console.log(getNotes());

// const validator = require("validator");
// console.log(validator.isEmail("example.com"));

// console.log(chalk.green.bold("success!"));
// console.log(process.argv[2]);

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("adding notes", argv);
    // console.log("Title : ", argv.title);
    // console.log("Body : ", argv.body);
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("removing notes");
    // console.log(argv.title);
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Listing out notes ....",
  handler: function () {
    // console.log("listing out notes...");
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Reading a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("reading note");
    notes.readNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
