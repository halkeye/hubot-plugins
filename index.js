const path = require('path');

module.exports = function (robot) {
  return [
    require.resolve('hubot-phrases/src/scripts/hubot-phrases.js'),
    require.resolve('hubot-variables/src/scripts/hubot-variables.js')
  ].map(function(_path) { return robot.loadFile(path.dirname(_path), path.basename(_path)); });
};
