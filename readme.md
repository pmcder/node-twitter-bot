## Overview 

This bot is built in node.js and uses the Twitter API to search twitter programatically. </br>
I have built this with a minimum of external libraries in order to further explore node.js itself.
 
## Next steps
Among the next steps for this application are building methods for hitting all the different Twitter API endpointsand building out the functionality for saving and anaylizing tweets.

## Running 

### Pre-requisites
You will need: </br>
1. Node.js
2. NPM
3. A Twitter Developer account
4. A mongodb instance (if planning to use the database functionality) otherwise you will need to comment out the mongo related lines in bot.js


Fork the project and create a branch. You can read how to do so *[here](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)* </br>

Create a file called credentials.js to store your bearer token and API keys (obtained from your Twitter Developer Account) as well as your mongodb credentials.
</br>Be sure to add credentials.js to .gitignore so that you don't share them to GitHub should you decide to host your repository there.</br>
Alternately, you can enter these credentials as command line args.
</br>
Navigate to the project directory and run <code>npm install</code> </br>
Once dependencies have finished installing, run <code>node bot.js</code>
</br>

## Performing different searches
In bot.js you can use the methods on <code>getTweets</code> to perform different searches.</br>
<code>getTweets.searchByHashtag()</code> allows you to search by hashtag</br>
<code>getTweets.searchByUser()</code> allows you to search by user</br>

## Saving tweets to the database
The bot currently supports two save functions.</br>
### Saving users
<code>results.saveUsers</code> will save a list of user names and the hashtag that was searched for. This the <code>screen_name</code>attribute on the user object in a status (tweet). </br>
### Saving users' tweets</br>
<code>results.saveTweets</br> will iterate through all the users that have tweeted about a given hashtag and then save that user's recent tweets and their username to the database.










