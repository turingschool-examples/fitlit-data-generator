const moment = require('moment');
const generateValueWithinRange = require('./util');

function genSleepDataForDates(dateIndex) {
  return (new Array(global.numUsers)).fill().map(function(user, idx) {
    return {
      userID: idx + 1,
      date: moment().add(dateIndex, 'days').format('YYYY/MM/DD'),
      hoursSlept: generateValueWithinRange(4, 11, 1), // hours
      sleepQuality: generateValueWithinRange(1, 5, 1) // unitless
    }
  });
}

function genSleep() {
  return (new Array(global.numDays)).fill().map(function(date, idx) {
    return genSleepDataForDates(idx + 1);
  });
  // need to concat these nested arrays
}

module.exports = genSleep;