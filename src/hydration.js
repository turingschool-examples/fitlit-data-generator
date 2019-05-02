const moment = require('moment');
const generateValueWithinRange = require('./util');

function genHydrationDataForUser() {
  return (new Array(global.numDays)).fill().map(function(day, idx) {
    return {
      date: moment().add(idx + 1, 'days').format('DD/MM/YYYY'),
      numOunces: generateValueWithinRange(10, 100, 0)
    }
  });
}

function genHydration() {
  return (new Array(global.numUsers)).fill().map(function(user, idx) {
    return {
      userID: idx + 1,
      hydrationData: genHydrationDataForUser()
    }
  });
}

module.exports = genHydration;