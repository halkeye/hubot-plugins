'use strict';
const Path = require('path');
const QS = require('qs');
const request = require('request');

module.exports = {
  apiURL: function apiUrl (uri, params) {
    let str = new URL(process.env.HUBOT_SONARR_HTTP);
    str.pathname = Path.join(str.pathname, 'api', uri);
    str = str.toString();
    if (params) {
      str = str + '?' + QS.stringify(params);
    }
    return str;
  },
  fetchFromSonarr: function fetchFromSonarr (url) {
    return new Promise(function (resolve, reject) {
      const options = {
        url: url,
        headers: {
          Accept: 'application/json',
          'X-Api-Key': process.env.HUBOT_SONARR_API_KEY
        }
      };
      request.get(options, function (err, httpres, body) {
        if (err) { return reject(err); }
        if (httpres.statusCode !== 200) { return reject(new Error('Error Code: ' + httpres.statusCode)); }
        return resolve(JSON.parse(body));
      });
    });
  }
};
