const request = require('request');
module.exports = function (username, password, hostname) {
  const uri = (function () {
    const uri = new URL(hostname);
    uri.pathname = '/rest/api/content/search';
    return uri.toString();
  })();
  return {
    simpleSearch: function (cql) {
      return new Promise(function (resolve, reject) {
        request({
          method: 'GET',
          uri: uri,
          json: true,
          qs: {
            limit: 5,
            cql: cql
          },
          auth: {
            user: username,
            pass: password,
            sendImmediately: true
          }
        }, function (err, response, results) {
          if (err) { return reject(err); }
          // Check for right status code
          if (response.statusCode !== 200) {
            return reject(new Error('Invalid Status Code Returned: ' + response.statusCode + ' - ' + response.body.message));
          }

          if (!results) { return reject(new Error('empty result object')); }
          return resolve(results);
        });
      });
    }
  };
};
