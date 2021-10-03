const mongoose = require('mongoose');
const credentials = require('./credentials');
const getTweets = require('./getTweets');
const colors = require('colors/safe');
const twitterUsers = require('./db/models/twitterUsers');
const userSearch = twitterUsers.getTwitterUser();
const userTweets = require('./db/models/userTweets');
const tweetSearch = userTweets.getTwitterUser();

const r = require('./results')

//stores mongodb credentials
const username = process.env.USERNAME_ENV || credentials.username;
const password = process.env.PASSWORD || credentials.password;
const dbHost = process.env.DBHOST || credentials.host;
const db = process.env.DB || credentials.database;

//mongodb connection string
const dbUrl = 'mongodb+srv://' + username +
    ':' + password + '@' + dbHost + '/' + db +
    '?retryWrites=true&w=majority';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

getTweets.searchByHashtag('starbucks').then(r.saveTweets)




