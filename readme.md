## Overview 

This bot is built in node.js and uses the Twitter API to search twitter programatically. </br>
I have built this with a minimum of external libraries in order to further explore node.js itself.
This also makes the project accessible to those learning to code. I have tried to explain everything step by step in the comments and in this readme. 

## Next steps
I plan to build this out by building functionality for hitting all the different Twitter API endpoints as well save search results to MongoDB.


## Running 

### Pre-requisites
You will need: </br>
1. Node.js
2. NPM
3. A Twitter Developer account


Fork the project and create a branch. You can read how to do so *[here](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)* </br>

Create a file called credentials.js to store your bearer token and API keys (obtained from your Twitter Developer Account). 
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
Here you can write logic to combine and automate different searches. For example, you could get a list of user names that have tweeted about a certain hashtag, then search those users' recent tweets. 








