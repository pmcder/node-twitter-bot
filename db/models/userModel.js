const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

let model = null;

const twitterUserSchema = new Schema({

 searchTerm : string,
 user_names : [string]

},
{collection : 'twitterUsers'});

module.exports.getTwitterUser = ()=>{
    model = Mongoose.model('twitterUser',twitterUserSchema);
    return model;
}