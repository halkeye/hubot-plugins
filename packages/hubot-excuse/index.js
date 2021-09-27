const path = require('path');

module.exports = function loadScripts (robot) {
  const scriptsPath = path.resolve(__dirname, 'src/scripts');
  return [
    robot.loadFile(scriptsPath, 'hubot-excuse.js')
  ];
};
