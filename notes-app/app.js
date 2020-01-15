const validator = require('validator');

const getNotes = require('./utils');

console.log(getNotes());


console.log(validator.isEmail('Mohamed@example.com'))
