const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const log = console.log;
const getNotes = require('./utils');

console.log(getNotes());

yargs.command({
  command:"add",
  descripe:"Add a note",
  handler: function(){
    console.log("Adding the note");
  }
})
yargs.command({
  command:"remove",
  descripe:"Remove a note",
  handler: function(){
    console.log("Removing the note");
  }
})
yargs.command({
  command:"list",
  descripe:"Listing a note",
  handler: function(){
    console.log("Listing the note");
  }
})
yargs.command({
  command:"read",
  descripe:"Reading a note",
  handler: function(){
    console.log("Reading the note");
  }
})
console.log(validator.isEmail('Mohamed@example.com'))
log(chalk.keyword('orange')('Yay for orange colored text!'));

console.log(yargs.argv);


console.log(process.argv);
