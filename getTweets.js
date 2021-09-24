
const credentials = require('./credentials');

var https = require('https'); 

const { threadId } = require('worker_threads');

const viewTweets = require('./viewTweets')

const apiKey = process.env.API_KEY || credentials.API_KEY;
const apiKeySecret = process.env.API_KEY_SECRET || credentials.API_KEY_SECRET;
const bearerToken = process.env.BEARER_TOKEN || credentials.BEARER_TOKEN;

//Creates the URL object from the hostname
//We will work with this object to hit the various endpoints of the API
const requestUrl = new URL('https://api.twitter.com');

//path to see specific tweets by id
const tweetsPath = "/2/tweets";

//path to search for recent tweets
const searchRecentPath = "/1.1/search/tweets.json";

requestUrl.pathname = searchRecentPath;

const options = {
    headers: {
        'authorization': `Bearer ${bearerToken}`
    }
}

searchByUser = (user_name,output)=>{

    let params = new URLSearchParams([
        ['from',user_name]  
]);
    
    requestUrl.search = params;

    https.get(requestUrl,options,output)
}

searchByHashtag = (hashtag,output)=>{

    let params = new URLSearchParams([
              ['q',`%23${hashtag}`]  
      ]);

    requestUrl.search = params;

    https.get(requestUrl,options,output)
}

module.exports = {
    searchByUser : searchByUser,
    searchByHashtag : searchByHashtag
}





