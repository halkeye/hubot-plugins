const path = require('path');

module.exports = function (robot) {
  const scriptPath = path.resolve(__dirname, 'src');
  return [robot.loadFile(scriptPath, 'pugme.js')];
};
