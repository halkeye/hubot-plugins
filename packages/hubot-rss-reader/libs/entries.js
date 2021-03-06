// Data Store for entries

class Entries {
  constructor (robot) {
    this.robot = robot;
    this.prefix = 'hubot-rss-reader:entry:';
  }

  key (url) {
    return `${this.prefix}${url}`;
  }

  add (url) {
    return this.robot.brain.set(this.key(url), true);
  }

  remove (url) {
    return this.robot.brain.set(this.key(url), false);
  }

  include (url) {
    return this.robot.brain.get(this.key(url));
  }
}
module.exports = Entries;
