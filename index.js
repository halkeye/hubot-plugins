module.exports = function (robot) {
  return [
    require.resolve('hubot-phrases/src/scripts/hubot-phrases.js'),
    require.resolve('hubot-variables/src/scripts/hubot-variables.js')
  ];
};
