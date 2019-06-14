const moment = require('moment');
const generateValueWithinRange = require('./util');

function genHydrationDataForDates(dateIndex) {
  return (new Array(global.numUsers)).fill().map(function(user, idx) {
    return {
      userID: idx + 1,
      date: moment().add(dateIndex, 'days').format('YYYY/MM/DD'),
      numOunces: generateValueWithinRange(20, 100, 0)
    }
  });
}

function genHydration() {
  return (new Array(global.numDays)).fill().map(function(date, idx) {
    return genHydrationDataForDates(idx + 1);
  }); 
  // need to concat these nested arrays
}

module.exports = genHydration;