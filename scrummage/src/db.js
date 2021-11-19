// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');

// is the environment variable, NODE_ENV, set to PRODUCTION? 
let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fs = require('fs');
 // import path from "path"
 const path = require('path');
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 dbconf = 'mongodb://localhost/scrummage';
}

const Task = new mongoose.Schema({
  id : {type: Number, required: true},
  name: {type: String, required: true},
  finished: {type: Boolean, required: true},
})

// a Sprint list
// * each Sprint must have a related user,
const Sprint = new mongoose.Schema({
  tasks: [Task],
  name: {type: String, required: true},
  finished: {type: Boolean, required: true},
  createdAt: {type: Date},
  current: {type: Boolean, required: true}
})

const Backlog = new mongoose.Schema({
  tasks: [Task],
  name: {type: String, required: true},
  finished: {type: Boolean, default: false, required: true},
});

// users
// * authentication required
// * so users have a username and password
// * they also can have 0 or more lists
const User = new mongoose.Schema({
  // username provided by authentication plugin
  // password hash provided by authentication plugin
  lists:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
  username: {type: String, required: true},
  current_sprint: [Sprint],
  backlog: [Backlog]
});


mongoose.model('User',User);
mongoose.model('Task',Task);
mongoose.model('Backlog',Backlog);
mongoose.model('Sprint',Sprint);

console.log(dbconf)
mongoose.connect(dbconf);



