const mongoose = require('mongoose');


const username = process.env.USERNAME_ENV || credentials.username;
const password = process.env.PASSWORD || credentials.password;
const dbHost = process.env.DBHOST || credentials.host;
const db = process.env.DB || credentials.database;

const dbUrl = 'mongodb+srv://' + username +
  ':' + password + '@' + dbHost + '/' + db +
  '?retryWrites=true&w=majority';

mongoose.connect(dbUrl, {useNewUrlParser: true,useUnifiedTopology: true});