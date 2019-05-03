const generateValueWithinRange = require('./util');

function genName() {
  return `${faker.name.firstName()} ${faker.name.lastName()}`;
}

function genAddress() {
  const streetAddress = faker.address.streetAddress();
  const city = faker.address.city();
  const stateAbreviation = faker.address.stateAbbr();
  const zipCode = faker.address.zipCode();

  return `${streetAddress}, ${city} ${stateAbreviation} ${zipCode}`;
}

function genEmail() {
  return faker.internet.email();
}

function genDailyStepGoal() {
  dailStepGoals = [2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000];
  return dailStepGoals[Math.floor(Math.random() * dailStepGoals.length)];
}

function genUsers() {
  return (new Array(global.numUsers)).fill().map(function(user, idx) {
    return {
      id: idx + 1,
      name: genName(),
      address: genAddress(),
      email: genEmail(),
      strideLength: generateValueWithinRange(4, 5.5, 1), // feet
      dailyStepGoal: genDailyStepGoal()
    }
  });
}

module.exports = genUsers;