const Helper = require("hubot-test-helper");
require("should");

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const scriptHelper = new Helper("../src/devopsreactions.js");
const script = require('../src/devopsreactions.js');
console.error = function() { };

script.getTwitterClient = () => {
  return {
    async get(part, ops) {
      return [
        {
          "created_at": "Tue Jul 02 17:09:06 +0000 2019",
          "id": 1146103517389582300,
          "id_str": "1146103517389582336",
          "text": "Calculating the power requirements for the new DC cage #devops #sysadmin https://t.co/mbDJDPu1Aw",
          "truncated": false,
          "entities": {
            "hashtags": [
              {
                "text": "devops",
                "indices": [
                  55,
                  62
                ]
              },
              {
                "text": "sysadmin",
                "indices": [
                  63,
                  72
                ]
              }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
              {
                "id": 1146103515615338500,
                "id_str": "1146103515615338496",
                "indices": [
                  73,
                  96
                ],
                "media_url": "http://pbs.twimg.com/tweet_video_thumb/D-fHEzwUIAAYD-Y.jpg",
                "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/D-fHEzwUIAAYD-Y.jpg",
                "url": "https://t.co/mbDJDPu1Aw",
                "display_url": "pic.twitter.com/mbDJDPu1Aw",
                "expanded_url": "https://twitter.com/devopsreact/status/1146103517389582336/photo/1",
                "type": "photo",
                "sizes": {
                  "small": {
                    "w": 244,
                    "h": 164,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 244,
                    "h": 164,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "large": {
                    "w": 244,
                    "h": 164,
                    "resize": "fit"
                  }
                }
              }
            ]
          },
          "extended_entities": {
            "media": [
              {
                "id": 1146103515615338500,
                "id_str": "1146103515615338496",
                "indices": [
                  73,
                  96
                ],
                "media_url": "http://pbs.twimg.com/tweet_video_thumb/D-fHEzwUIAAYD-Y.jpg",
                "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/D-fHEzwUIAAYD-Y.jpg",
                "url": "https://t.co/mbDJDPu1Aw",
                "display_url": "pic.twitter.com/mbDJDPu1Aw",
                "expanded_url": "https://twitter.com/devopsreact/status/1146103517389582336/photo/1",
                "type": "animated_gif",
                "sizes": {
                  "small": {
                    "w": 244,
                    "h": 164,
                    "resize": "fit"
                  },
                  "medium": {
                    "w": 244,
                    "h": 164,
                    "resize": "fit"
                  },
                  "thumb": {
                    "w": 150,
                    "h": 150,
                    "resize": "crop"
                  },
                  "large": {
                    "w": 244,
                    "h": 164,
                    "resize": "fit"
                  }
                },
                "video_info": {
                  "aspect_ratio": [
                    61,
                    41
                  ],
                  "variants": [
                    {
                      "bitrate": 0,
                      "content_type": "video/mp4",
                      "url": "https://video.twimg.com/tweet_video/D-fHEzwUIAAYD-Y.mp4"
                    }
                  ]
                }
              }
            ]
          },
          "source": "<a href=\"https://apps.twitter.com/app/new\" rel=\"nofollow\">Tumbler to twitter</a>",
          "in_reply_to_status_id": null,
          "in_reply_to_status_id_str": null,
          "in_reply_to_user_id": null,
          "in_reply_to_user_id_str": null,
          "in_reply_to_screen_name": null,
          "user": {
            "id": 748965435328966700,
            "id_str": "748965435328966656",
            "name": "DevOps reactions",
            "screen_name": "devopsreact",
            "location": "",
            "description": "Say it with pictures. Describe your feelings about your everyday sysadmin interactions. #devops #SRE",
            "url": null,
            "entities": {
              "description": {
                "urls": []
              }
            },
            "protected": false,
            "followers_count": 3192,
            "friends_count": 17,
            "listed_count": 64,
            "created_at": "Fri Jul 01 19:44:09 +0000 2016",
            "favourites_count": 12044,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 700,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "F5F8FA",
            "profile_background_image_url": null,
            "profile_background_image_url_https": null,
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/748967292696866816/gHO6OTQ6_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/748967292696866816/gHO6OTQ6_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/748965435328966656/1489197935",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
          },
          "geo": null,
          "coordinates": null,
          "place": null,
          "contributors": null,
          "is_quote_status": false,
          "retweet_count": 3,
          "favorite_count": 5,
          "favorited": false,
          "retweeted": false,
          "possibly_sensitive": false,
          "lang": "en"
        }

      ]
    }
  }
}

describe('devopsreactions', function() {
  beforeEach(() => {
    room = scriptHelper.createRoom({ httpd: false });
    room.robot.http = () => ({
      get: () => (cb) => cb(null, null, JSON.stringify(require('./reddit.json')))
    })
  });
  afterEach(() => { room.destroy(); });

  describe("help", () => {
    it("lists help", () => {
      room.robot.helpCommands().should.eql([
        "hubot devops me - Grab a random gif from https://twitter.com/devopsreact"
      ]);
    });
  });
  describe("devops me", () => {
    beforeEach(() => room.user.say("Shell", "hubot devops me").then(() => sleep(1)));
    it("devops me should return one", () => {
      room.messages.should.eql([
        ["Shell", "hubot devops me"],
        [ 'hubot', 'Calculating the power requirements for the new DC cage #devops #sysadmin https://t.co/mbDJDPu1Aw' ],
        [ 'hubot', 'https://video.twimg.com/tweet_video/D-fHEzwUIAAYD-Y.mp4' ]
      ])
    });
  });
});

