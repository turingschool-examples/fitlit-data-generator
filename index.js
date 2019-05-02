const writeToFile = require('./src/writeToFile');
const genUsers = require('./src/users');
const genHydration = require('./src/hydration');
const genSleep = require('./src/sleep');
const genActivity = require('./src/activity');

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
console.log('Generating sleep data...');
writeToFile('./output/sleep.js', genSleep());
console.log('Generating activity data...');
writeToFile('./output/activity.js', genActivity());
