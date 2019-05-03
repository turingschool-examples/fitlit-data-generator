const moment = require('moment');
const generateValueWithinRange = require('./util');

function genSleepDataForUser() {
  return (new Array(global.numDays)).fill().map(function(day, idx) {
    return {
      date: moment().add(idx + 1, 'days').format('DD/MM/YYYY'),
      hoursSlept: generateValueWithinRange(4, 11, 1), // hours
      sleepQuality: generateValueWithinRange(1, 5, 1) // unitless
    }
  });
}

function genSleep() {
  return (new Array(global.numUsers)).fill().map(function(user, idx) {
    return {
      userID: idx + 1,
      sleepData: genSleepDataForUser()
    }
  });
}

module.exports = genSleep;