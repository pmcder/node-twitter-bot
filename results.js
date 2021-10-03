

const twitterUsers = require('./db/models/twitterUsers');
const userSearch = twitterUsers.getTwitterUser();
const getTweets = require('./getTweets');
const userTweets = require('./db/models/userTweets');
const tweetSearch = userTweets.getTwitterUser();

/**
 * prints entire response 
 * to the console
 */
displayResults = ((data) => {
    console.log(data)
})

/**
 * saves all users that have tweeted about 
 * the search performed.
 */
saveUsers = ((data) => {

    let query = data.search_metadata.query;
    let userNames = []
    query = query.slice(5)

    data.statuses.forEach(s => {
        userNames.push(s.user.screen_name)
    })
    let us = new userSearch({
        searchTerm: query,
        user_names: userNames
    })
    us.save()
    console.log(userNames.length + ' records saved')
})

/**
 * saves all tweets 
 * by all users that have tweeted about a hashtag
 */
saveTweets=(data) => {
    let users = []
    data.statuses.forEach(s => {
        users.push(s.user.screen_name)
    })
    users.forEach(u => {
        getTweets.searchByUser(u).then((data) => {
            let tweets =[];
            let userName = u;
            data.statuses.forEach(statuses => {
                tweets.push(statuses.text)
            });
            let ts = new tweetSearch({
                user_names : userName,
                tweets : tweets
            }) 
            ts.save()
            
        });
    })
    console.log('records saved!')
}

module.exports = {
    displayResults : displayResults,
    saveUsers : saveUsers,
    saveTweets : saveTweets
}