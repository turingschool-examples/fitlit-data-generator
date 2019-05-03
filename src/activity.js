const moment = require('moment');
const generateValueWithinRange = require('./util');

function genActivityDataForUser() {
  return (new Array(global.numDays)).fill().map(function(day, idx) {
    return {
      date: moment().add(idx + 1, 'days').format('DD/MM/YYYY'),
      numSteps: generateValueWithinRange(2000, 15000, 0), // steps
      minutesActive: generateValueWithinRange(20, 300, 0), // minutes
      flightsOfStairs: generateValueWithinRange(0, 50, 0) // flights
    }
  });
}

function genActivity() {
  return (new Array(global.numUsers)).fill().map(function(user, idx) {
    return {
      userID: idx + 1,
      activityData: genActivityDataForUser()
    }
  });
}

module.exports = genActivity;