const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

let model = null;

const twitterUserSchema = new Schema({

 searchTerm : String,
 user_names : [String]

},
{collection : 'twitterUsers'});

module.exports.getTwitterUser = ()=>{
    model = Mongoose.model('twitterUser',twitterUserSchema);
    return model;
}