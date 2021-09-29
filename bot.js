const { Console } = require('console');
const { mainModule } = require('process');
const credentials = require('./credentials');
const getTweets = require('./getTweets');
var colors = require('colors/safe');


//search for screen names by hashtag
getTweets.searchByHashtag('minecraft').then((data) => {
    data.statuses.forEach(statuses => {
        console.log(colors.green(statuses.user.screen_name + '\n'))
    });
});

