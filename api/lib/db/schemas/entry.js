const config = require('platformsh-config').config();
const mongoose = require('mongoose');

let credentials = null;
if (!config.isValidPlatform()) {
  credentials = {
    username: "guest",
    password: "guest",
    host: "mongo",
    port: 27017,
    path: ""
  }
} else {
  credentials = config.credentials('database');
}

try {
  mongoose.connect(`mongodb://${credentials.username}:${credentials.password}@${credentials.host}:${credentials.port}/${credentials.path}`, {useNewUrlParser: true});
} catch (error) {
  console.log(error);
}

const Schema = mongoose.Schema;


const entrySchema = new Schema({
  title: String,
  status: Boolean,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
