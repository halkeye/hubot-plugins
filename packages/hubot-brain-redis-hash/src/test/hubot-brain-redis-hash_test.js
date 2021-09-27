/* eslint-env mocha */
'use strict';

process.env.HUBOT_LOG_LEVEL = 'alert';
process.env.EXPRESS_PORT = (process.env.PORT = 0);

require('should');
const sinon = require('sinon');
const fakeredis = require('fakeredis');

const BrainUtilities = require('../scripts/utils');
const Helper = require('hubot-test-helper');
const helper = new Helper('../scripts/hubot-brain-redis-hash.js');

describe('Hubot-Brain-Redis-Hash', function () {
  let room;
  let client;

  before(() => {
    client = fakeredis.createClient();
    sinon.stub(BrainUtilities, 'createClient').returns(client);
  });
  after(() => BrainUtilities.createClient.restore());

  beforeEach(function () {
    room = helper.createRoom({ httpd: false });
  });

  afterEach(function (done) {
    client.flushdb(() => done());
  });

  it('handleError', function () {
    client.emit('error', 'this is my fake error');
  });

  it('handleConnect', function (done) {
    const origData = { users: {}, _private: {} };
    room.robot.brain.data.should.eql(origData);
    origData.thisisgavin = { a: 'byebye' };

    const multi = client.multi();
    for (const key of Object.keys(origData)) {
      multi.hset('hubot:brain', key, JSON.stringify(origData[key]));
    }

    multi.exec((err, replies) => {
      if (err) { return done(err); }

      room.robot.brain.on('loaded', function (data) {
        data.should.eql(origData);
        done();
      });
      client.emit('connect');
    });
  });

  it('handleSave', async function () {
    room.robot.brain.data.should.eql({ users: {}, _private: {} });
    room.robot.brain.data.gavin = 'gavin';
    room.robot.brain.data.gavin.should.eql('gavin');
    room.robot.brain.save();
    await new Promise(resolve => room.robot.brain.once('done:save', resolve));
    const reply = await new Promise((resolve, reject) => {
      client.hgetall('hubot:brain', function (err, values) {
        if (err) {
          reject(err);
        } else {
          resolve(values);
        }
      });
    });
    reply.gavin.should.eql('"gavin"');
  });
});
