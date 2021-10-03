
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

requestUrl.pathname = searchRecentPath;

const options = {
    headers: {
        'authorization': `Bearer ${bearerToken}`
    }
}

function searchByUser(user_name) {
   
    return new Promise((resolve, reject) => {
   
    let params = new URLSearchParams([
        ['from',`${user_name}`]  
]);
    const options = {
        headers: {
            'authorization': `Bearer ${bearerToken}`
        }
    }
    requestUrl.search = params;
       const req = https.request(requestUrl,options, (res) => {
         if (res.statusCode < 200 || res.statusCode >= 300) {
               return reject(new Error('statusCode=' + res.statusCode));
           }
           var str = " "
           
           var tweets;
           res.on('data', function(chunk) {
            str += chunk
           });
           res.on('end', function() {
               try {
                tweets = JSON.parse(str)
           
               } catch(e) {
                   reject(e);
               }
               
               resolve(tweets);
           });
       });
       req.on('error', (e) => {
         reject(e.message);
       });
       
      req.end();
   });
}

function searchByHashtag(hashtag) {
   
    return new Promise((resolve, reject) => {
   
    let params = new URLSearchParams([
        ['q',`%23${hashtag}`]  
]);
    const options = {
        headers: {
            'authorization': `Bearer ${bearerToken}`
        }
    }
    requestUrl.search = params;
       const req = https.request(requestUrl,options, (res) => {
         if (res.statusCode < 200 || res.statusCode >= 300) {
               return reject(new Error('statusCode=' + res.statusCode));
           }
           var str = " "
       
           var tweets;
           res.on('data', function(chunk) {
            str += chunk
           });
           res.on('end', function() {
               try {
                tweets = JSON.parse(str)
               } catch(e) {
                   reject(e);
               }
               resolve(tweets);
           });
       });
       req.on('error', (e) => {
         reject(e.message);
       });
       
      req.end();
   });
}
    
module.exports = {
    searchByUser : searchByUser,
    searchByHashtag : searchByHashtag
}





