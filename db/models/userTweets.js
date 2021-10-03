const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

let model = null;

const userTweetsSchema = new Schema({
 user_names : String,
 tweets : [String]
},
{collection : 'tweets_by_user'});

module.exports.getTwitterUser = ()=>{
    model = Mongoose.model('userTweets',userTweetsSchema);
    return model;
}