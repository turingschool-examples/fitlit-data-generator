const writeToFile = require('./src/writeToFile');
const genUsers = require('./src/users');

console.log('Generating users...');
writeToFile('./output/users.js', genUsers());


