const fs = require('fs');

module.exports = function (robot) {
  const path = require('path').resolve(__dirname, 'src');
  if (!fs.existsSync(path)) {
    return;
  }
  fs.readdirSync(path).map(file => robot.loadFile(path, file));
};
