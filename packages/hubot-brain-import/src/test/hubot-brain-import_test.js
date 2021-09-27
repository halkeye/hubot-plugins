/* eslint-env mocha */
'use strict';
process.env.PORT = 0;

process.env.HUBOT_LOG_LEVEL = 'alert';
process.env.EXPRESS_PORT = (process.env.PORT = 0);

const path = require('path');
const fs = require('fs');
const should = require('should');
should.config.checkProtoEql = false;

const TestHelper = require('hubot-test-helper');
const helper = new TestHelper('../scripts/hubot-brain-import.js');

process.env.BRAIN_IMPORT_FILE = path.join(__dirname, '../../brain-import.json');

let room;
describe('Hubot-Brain-Import', function () {
  beforeEach(() => fs.writeFileSync(process.env.BRAIN_IMPORT_FILE, JSON.stringify({})));
  afterEach(() => fs.unlinkSync(process.env.BRAIN_IMPORT_FILE, JSON.stringify({})));

  beforeEach(() => { room = helper.createRoom(); });
  afterEach(() => { room.destroy(); });

  describe('help', () => {
    it('lists help', () => {
      room.robot.helpCommands().should.eql([]);
    });
  });
  it('handleError', function () {
    room.robot.brain.emit('loaded');
  });
});
