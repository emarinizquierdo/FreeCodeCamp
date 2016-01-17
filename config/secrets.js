module.exports = {

  db: process.env.MONGODB || process.env.MONGOHQ_URL || 'mongodb://localhost/freecode-camp',

  sessionSecret: 'my_secret',

  trello: {
    key: process.env.TRELLO_KEY,
    secret: process.env.TRELLO_SECRET
  },

  blogger: {
    key: process.env.BLOGGER_KEY
  },

  mandrill: {
    user: process.env.MANDRILL_USER,
    password: process.env.MANDRILL_PASSWORD
  },

  facebook: {
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  github: {
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },

  twitter: {
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    token: process.env.TWITTER_TOKEN,
    tokenSecret: process.env.TWITTER_TOKEN_SECRET,
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  google: {
    clientID: process.env.GOOGLE_ID || '448858735917-snjpjnhesdsp0dbndt4g441ocjitq7fi.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || 'mfZXCQ7ennLD6V9k_hbvtMjA',
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  },

  linkedin: {
    clientID: process.env.LINKEDIN_ID,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: '/auth/linkedin/callback',
    scope: ['r_basicprofile', 'r_emailaddress'],
    passReqToCallback: true
  },
  slackHook: process.env.SLACK_WEBHOOK,

  cookieSecret: process.env.COOKIE_SECRET
};
