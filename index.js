const writeToFile = require('./src/writeToFile');
const genUsers = require('./src/users');

// Globals
global.numUsers = 2;
global.faker = require('faker');
global.faker.locale = 'en_US';


// Create and write data to files
console.log('Generating users...');
writeToFile('./output/users.js', genUsers());


