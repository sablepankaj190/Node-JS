const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();

const user = JSON.parse(dataJSON);

user.name = "Pankaj";
user.age = 22;

const modifiedData = JSON.stringify(user);

fs.writeFileSync("1-json.json", modifiedData);