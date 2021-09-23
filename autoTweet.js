
//documentation for endpoint at https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-update

const credentials = require('./credentials');

const https = require('https'); 

const OAuth = require('oauth-1.0a');

const crypto = require('crypto');

const querystring = require('querystring');

const { threadId } = require('worker_threads');

const apiKey = process.env.API_KEY || credentials.API_KEY;
const apiKeySecret = process.env.API_KEY_SECRET || credentials.API_KEY_SECRET;
const bearerToken = process.env.BEARER_TOKEN || credentials.BEARER_TOKEN;

//building the URL 

const requestUrl = new URL('https://api.twitter.com');

const statusUpdatePath = "1.1/statuses/update.json";

//auth token url
const requestTokenUrl = "https://api.twitter.com/oauth/request_token?oauth_callback=oob"
// const requestTokenUrl = "https://api.twitter.com/oauth/request_token?oauth"
//OAuth is needed as this is a user context request
//the following methods taken from https://github.com/twitterdev/Twitter-API-v2-sample-code/blob/main/User-Lookup/get_users_with_user_context.js
const oauth = OAuth({
    consumer: {
      key: apiKey,
      secret: apiKeySecret
    },
    signature_method: 'HMAC-SHA1',
    hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
  });
  

  //need to build methods to get auth token
  //import crypto ? see above method
  //adapted from https://github.com/twitterdev/Twitter-API-v2-sample-code/blob/main/User-Lookup/get_users_with_user_context.js
 
  
  //method to get token
  //  function requestToken() {
   
  //   let authHeader = oauth.toHeader(oauth.authorize({
  //     url: requestTokenUrl,
  //     method: 'POST'
  //   }));

  //   let tokenOptions = {
  //     headers: {
  //       Authorization: authHeader["Authorization"]
  //     }
  //   }
  //     console.log('test',tokenOptions)
  //     const req = https.request(requestTokenUrl, tokenOptions,res=>{
  //     res.on('data', d => {
  //       console.log(d.body)
  //     })
  //   })
    
  //   console.log(querystring.parse(req.body))
  // }

  //calls method to get token
  //requestToken()

//sets the message that will be tweeted
const statusData = new TextEncoder().encode(
    JSON.stringify({
      status: 'Hello World !'
    })
  )

  const params = new URLSearchParams([
    ['status','Hello World !']
]);

requestUrl.search = params;

requestUrl.pathname = statusUpdatePath;

const authHeader = oauth.toHeader(oauth.authorize({
  
  url: requestTokenUrl,
   method: 'POST'
 }));

//set the bearer token so that Twitter API authenticates us
const options = {
method : 'POST',
host : requestUrl.host, 
path : requestUrl.pathname,
headers: {
    'Content-Type': 'application/json',
    'Content-Length': 0,
    'Authorization': authHeader
}
};

statusUpdate = ((response)=> {
    console.log(response.statusCode)
    var str = '';
  
    //another chunk of data has been received, so append it to `str`
    response.on('data',  (chunk)=> {
      str += chunk;
    });
  
    //the whole response has been received, so we just print it out here
    response.on('end', ()=> {
      console.log(str);
    });
  });

  console.log(authHeader)

  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', d => {
      console.log(d)
    })
  })
  
//   req.on('error', e => {
//     let b = Buffer.toString(e)
//     console.log(b)
//   })

  req.on('response', r=>{
      console.log(typeof(r.toString))
  })
  
  console.log(requestUrl.toString())
  
   req.write(requestTokenUrl.toString(),options)

   req.end()