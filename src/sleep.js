const moment = require('moment');

function genSleepQuality() {
  const qualityMin = 1; // unitless
  const qualityMax = 5; // unitless
  return parseFloat((Math.random() * (qualityMax - qualityMin) + qualityMin).toFixed(1));
}

function genHoursSlept() {
  const hoursMin = 4; // hours
  const hoursMax = 11; // hours
  return parseFloat((Math.random() * (hoursMax - hoursMin) + hoursMin).toFixed(1));
}

function genSleepDataForUser() {
  return (new Array(global.numDays)).fill().map(function(day, idx) {
    return {
      date: moment().add(idx + 1, 'days').format('DD/MM/YYYY'),
      hoursSlept: genHoursSlept(),
      sleepQuality: genSleepQuality()
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