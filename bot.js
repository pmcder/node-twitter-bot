
const credentials = require('./credentials');

var https = require('https'); 
const { threadId } = require('worker_threads');
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

//set search params 
const params = new URLSearchParams([
      
  //search for hashtag minecraft 
        ['q','%23minecraft']
       
]);

//add params to the URL that we created
requestUrl.search = params;

//set path for the endpoint we want to hit
//only one path can be uncommented at a time

//uncomment to search recent tweets
requestUrl.pathname = searchRecentPath;

//uncomment to get specific tweets by ID
//requestUrl.pathname = tweetsPath;

//set the bearer token so that Twitter API authenticates us
const options = {
    headers: {
        'authorization': `Bearer ${bearerToken}`
    }
}

//This method is passed to the https request as a callback to handle the response
getTweets = ((response)=> {
  
    var str = ''

    response.on('data', (chunk)=> {
      str+=chunk
    });
  
    //at the end of the response we can build out the logic for what do with the returned tweets
    response.on('end', ()=> {

      let tweets = JSON.parse(str)

      //uncomment to print the entire reponse to the console
      //console.log(tweets.statuses)
      

    //uncomment to print the status text (the Tweet) and the user.

      // console.log(tweets.statuses.forEach(statuses => {
      //   console.log('user: '+ statuses.user.screen_name + '\t'+'tweet: ' + statuses.text)
      // }))

      //print a list of screen names that have recently tweeted the hashtag we searched for.
      console.log(tweets.statuses.forEach(statuses => {
        console.log(statuses.text)
      }))
    });
  });

https.get(requestUrl,options,getTweets);






