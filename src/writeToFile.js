const fs = require('fs').promises;

module.exports = function writeToFile(filename, data) {
  dataToJSON = JSON.stringify(data, null, 2);

  fs.writeFile(filename, dataToJSON)
    .then(() => console.log(filename + ' written to file.'))
    .catch(err => console.error(err));
};
