// Description:
//   Because devops are devops.
//
// Configuration:
//   DEVOPSREACTIONS_CONSUMER_KEY - Consumer key from https://developer.twitter.com/en/apps
//   DEVOPSREACTIONS_CONSUMER_SECRET - Consumer secret from https://developer.twitter.com/en/apps
//   DEVOPSREACTIONS_ACCESS_KEY - Access key from https://developer.twitter.com/en/apps
//   DEVOPSREACTIONS_ACCESS_SECRET - Access secret from https://developer.twitter.com/en/apps
//
// Commands:
//   hubot devops me - Grab a random gif from https://twitter.com/devopsreact
//
// Author:
//   halkeye

const Twitter = require('twitter');

function random(items) {
  return items[Math.floor(Math.random() * items.length)]
}

async function findReaction() {
  const params = { screen_name: 'devopsreact' };
  const client = module.exports.getTwitterClient();
  const tweets = await client.get('statuses/user_timeline', params);
  const tweet = random(tweets.filter(tweet => tweet.extended_entities && tweet.extended_entities.media && tweet.extended_entities.media.length > 0));
  if (!tweet) {
    throw new Error("No tweets are available")
  }

  const response = [];
  for (const media of tweet.extended_entities.media) {
    if (media.type === 'animated_gif') {
      if (!media.video_info || !media.video_info.variants) {
        throw new Error(`Animated gif has no variants: ${JSON.stringify(media)}`);
      }
      const variants = media.video_info.variants.find(v => v.content_type === "video/mp4") || media.video_info.variants[0];
      response.push(tweet.text.substring(0, media.indices[0]) + tweet.text.substring(media.indices[1]))
      response.push(variants.url)
      break;
    }
  }
  if (response.length == 0) {
    throw new Error(`Not sure how to handle: ${tweet.extended_entities.media.map(m => m.type).join(',')}`);
  }
  return response;
}

module.exports = function(robot) {
  robot.respond(/devops me/i, async function(res) {
    try {
      const responses = await findReaction();
      responses.map(msg => res.send(msg));
    } catch (err) {
      console.error(`There was an error getting a reaction: ${err}`);
      res.send(`There was an error getting a reaction: ${err}`);
    }
  });
}

module.exports.getTwitterClient = function() {
  return new Twitter({
    consumer_key: process.env.DEVOPSREACTIONS_CONSUMER_KEY,
    consumer_secret: process.env.DEVOPSREACTIONS_CONSUMER_SECRET,
    access_token_key: process.env.DEVOPSREACTIONS_ACCESS_KEY,
    access_token_secret: process.env.DEVOPSREACTIONS_ACCESS_SECRET
  });
}
