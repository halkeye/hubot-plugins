// Description:
//   Import brain data from a json file
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   None
//
// Author:
//   halkeye

'use strict';
const fs = require('fs');

module.exports = robot => robot.brain.once('loaded', function (data) {
  const file = process.env.BRAIN_IMPORT_FILE || (process.cwd() + '/brain-import.json');
  robot.logger.debug(`Looking for ${file}`);
  if (!fs.existsSync(file)) {
    return;
  }
  robot.logger.debug(`Brain import file (${file}) exists. Importing.`);
  const json = require(file);
  robot.brain.mergeData(json);
});
