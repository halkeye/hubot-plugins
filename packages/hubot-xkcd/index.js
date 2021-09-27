const path = require('path');

module.exports = function (robot) {
  const scriptPath = path.resolve(__dirname, 'lib');
  return [
    robot.loadFile(scriptPath, 'xkcd.js')
  ];
};
