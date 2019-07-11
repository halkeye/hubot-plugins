/* eslint-env mocha */
process.env.HUBOT_PORT = 0; // randomize
const Helper = require('hubot-test-helper');
const helper = new Helper('../scripts/hubot-excuse.js');
const co = require('co');
const sleep = require('es6-sleep').promise;

describe('hubot-excuse', function () {
  beforeEach(function () {
    this.room = helper.createRoom({ httpd: false });
  });
  describe('excuse', function () {
    beforeEach(function () {
      return co(function * () {
        yield this.room.user.say('halkeye', 'excuse');
        yield sleep(100);
      }.bind(this));
    });
    it('responds', function () {
      this.room.messages[0].should.eql(['halkeye', 'excuse']);
      this.room.messages[1][0].should.eql('hubot');
      this.room.messages[1][1].should.not.be.empty();
    });
  });
  describe('help', function () {
    it('responds', function () {
      this.room.robot.helpCommands().should.eql([
        'excuse - generates an excuse'
      ]);
    });
  });
});
