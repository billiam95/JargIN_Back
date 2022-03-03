const mongoose = require('mongoose');
const Comments = require('./comments.js');


const interviewSchema = new mongoose.Schema({
  type: {type: String, required: true},
  user: {type: String, required: true},
  date: String,
  company: String,
  jobTitle: String,
  stage: String,
  salary: String,
  location: String,
  timeLimit: String,
  question: String,
  devLanguage: String,
  userResponse: String,
  difficulty: Number,
<<<<<<< HEAD
  offer: Boolean,
  // comment: [Comments.schema]
}, {timestamps:true})
=======
  offer: Boolean
},{timestamps:true})
>>>>>>> 1244d75d3e3c786ba9f78b9d92ed49b11bb3fe91

const Interviews = mongoose.model('Interview', interviewSchema);

module.exports = Interviews;
