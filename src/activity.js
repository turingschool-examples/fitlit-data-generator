const moment = require('moment');

function genNumSteps() {
  const stepsMin = 2000; // steps
  const stepsMax = 15000; // steps
  return parseFloat((Math.random() * (stepsMax - stepsMin) + stepsMin).toFixed(0));
}

function genMinutesActive() {
  const minutesMin = 20; // minutes
  const minutesMax = 300; // minutes
  return parseFloat((Math.random() * (minutesMax - minutesMin) + minutesMin).toFixed(0));
}

function genFlightsOfStairs() {
  const flightsMin = 0; // flights
  const flightsMax = 50; // flights
  return parseFloat((Math.random() * (flightsMax - flightsMin) + flightsMin).toFixed(0));
}

function genActivityDataForUser() {
  return (new Array(global.numDays)).fill().map(function(day, idx) {
    return {
      date: moment().add(idx + 1, 'days').format('DD/MM/YYYY'),
      numSteps: genNumSteps(),
      minutesActive: genMinutesActive(),
      flightsOfStairs: genFlightsOfStairs()
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