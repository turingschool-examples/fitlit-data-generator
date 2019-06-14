const moment = require('moment');
const generateValueWithinRange = require('./util');

function genActivityDataForDates(dateIndex) {
  return (new Array(global.numUsers)).fill().map(function(user, idx) {
    return {
      userID: idx + 1,
      date: moment().add(dateIndex, 'days').format('YYYY/MM/DD'),
      numSteps: generateValueWithinRange(2000, 15000, 0), // steps
      minutesActive: generateValueWithinRange(20, 300, 0), // minutes
      flightsOfStairs: generateValueWithinRange(0, 50, 0) // flights
    }
  });
}

function genActivity() {
  return (new Array(global.numDays)).fill().map(function(date, idx) {
    return genActivityDataForDates(idx + 1);
  });
   // need to concat these nested arrays
}

module.exports = genActivity;