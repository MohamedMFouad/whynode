// const book = {
//   title : "Quantum Computing",
//   author : "Mohamed Foaud"
// }


// const bookJSON = JSON.stringify(book)
// console.log(bookJSON);


// const parseData = JSON.parse(bookJSON)
// console.log(parseData.title);
const fs = require('fs')
const dataBuffer = fs.readFileSync('./1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON)

user.title = "nodejs"
user.pages ="800"

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON)
