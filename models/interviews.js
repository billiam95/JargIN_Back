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
  offer: Boolean,
  // comment: [Comments.schema]
}, {timestamps:true})

const Interviews = mongoose.model('Interview', interviewSchema);

module.exports = Interviews;
