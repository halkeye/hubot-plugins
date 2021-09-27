// Description:
//   Confluence Integration
//
// Dependencies:
//   None
//
// Configuration:
//   HUBOT_CONFLUENCE_HOST - Confluence's base url (ie http://localhost:8080/confluence/)
//   HUBOT_CONFLUENCE_USERNAME - Confluence username
//   HUBOT_CONFLUENCE_PASSWORD - password
//   HUBOT_CONFLUENCE_SEARCH_SPACE - Specify to search within a single space only
//
// Commands:
//   hubot wiki <term> - Search term to look up
//
// Notes:
//   Copyright (c) 2016 Gavin Mogan
//   Licensed under the MIT license.
//
// Author:
//   halkeye

'use strict';

const username = process.env.HUBOT_CONFLUENCE_USERNAME;
const password = process.env.HUBOT_CONFLUENCE_PASSWORD;
const space = process.env.HUBOT_CONFLUENCE_SEARCH_SPACE;
const host = process.env.HUBOT_CONFLUENCE_HOST;

const path = require('path');
const Confluence = require('./confluence.js');

function appendUrl (pathname) {
  const uri = new URL(process.env.HUBOT_CONFLUENCE_HOST);
  uri.pathname = path.join(uri.pathname, pathname);
  return uri.toString();
}

module.exports = function (robot) {
  robot.confluence_search = new Confluence(username, password, host);
  // robot.parseHelp(__filename);
  robot.respond(/wiki\s*(.*)$/, function (res) {
    let query = '';
    if (space) {
      query = 'space = "' + space + '" and ';
    }
    query = query + 'text ~ "' + res.match[1] + '"';

    robot.confluence_search.simpleSearch(query).then(function (results) {
      if (results.results.length === 0) {
        res.send('Nothing found');
        return;
      }

      res.send(results.results.map(function (result) {
        return ' * ' + result.title + ' - ' + appendUrl(result._links.tinyui);
      }).join('\n'));
    }).catch(function (err) {
      console.error('Error from confluence:', err);
    });
  });
};
