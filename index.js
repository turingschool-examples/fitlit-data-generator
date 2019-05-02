const writeToFile = require('./src/writeToFile');
const genUsers = require('./src/users');
const genHydration = require('./src/hydration');

// Globals
global.numUsers = 2;
global.numDays = 5;
global.faker = require('faker');
global.faker.locale = 'en_US';

// Create and write data to files
console.log('Generating users...');
writeToFile('./output/users.js', genUsers());
console.log('Generating hydration data...');
writeToFile('./output/hydration.js', genHydration());

