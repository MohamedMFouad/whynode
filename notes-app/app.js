const validator = require('validator');
const chalk = require('chalk');
const log = console.log;
const getNotes = require('./utils');

console.log(getNotes());


console.log(validator.isEmail('Mohamed@example.com'))
log(chalk.keyword('orange')('Yay for orange colored text!'));
 


console.log(process.argv);
