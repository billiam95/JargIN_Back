const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  type: String,
  user: String,
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
  offer: Boolean
})

const Interviews = mongoose.model('Interview', interviewSchema);

module.exports = Interviews;
