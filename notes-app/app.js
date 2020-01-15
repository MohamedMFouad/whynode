const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const log = console.log;
const getNotes = require('./utils');

console.log(getNotes());

yargs.command({
  command:"add",
  describe:"Add a note",
  builder:{
    title:{
      describe: "Note title",
      demandOption:true,
      type:'string'
    },
    body :{
      describe: "Note title",
      demandOption:true,
      type:'string'
    }
  },
  handler: function(argv){
    console.log("Title: ", argv.title);
    console.log("Body: ", argv.body);

  }
})
// node app.js add --title="Hello" --body="Iam here
yargs.command({
  command:"remove",
  describe:"Remove a note",
  handler: function(){
    console.log("Removing the note");
  }
})
yargs.command({
  command:"list",
  describe:"Listing a note",
  handler: function(){
    console.log("Listing the note");
  }
})
yargs.command({
  command:"read",
  describe:"Reading a note",
  handler: function(){
    console.log("Reading the note");
  }
})
console.log(validator.isEmail('Mohamed@example.com'))
log(chalk.keyword('orange')('Yay for orange colored text!'));


yargs.parse();
// console.log(yargs.argv);


// console.log(process.argv);
