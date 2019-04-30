const moment = require('moment');

function genNumOunces() {
  const ouncesMin = 10; // fluid ounces
  const ouncesMax = 120; // fluid ounces
  return parseFloat((Math.random() * (ouncesMax - ouncesMin) + ouncesMin).toFixed(0));
}

function genHydrationDataForUser() {
  return (new Array(global.numDays)).fill().map(function(day, idx) {
    return {
      date: moment().add(idx + 1, 'days').format('DD/MM/YYYY'),
      numOunces: genNumOunces()
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