
const credentials = require('./credentials');

const getTweets = require('./getTweets');

const viewTweets = require('./viewTweets')

//The first parameter is the hashtag we want to search as a string without the # sign
//use the viewTweets module to change the output
getTweets.searchByHashtag('minecraft',viewTweets.statusText);





