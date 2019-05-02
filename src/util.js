function generateValueWithinRange(min, max, precision) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
}

module.exports = generateValueWithinRange;