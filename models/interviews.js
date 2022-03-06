const mongoose = require('mongoose');
const Comments = require('./comments.js');

const timestampFormat = {
  // Make Mongoose use Unix time (seconds since Jan 1, 1970)
  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
};

const interviewSchema = new mongoose.Schema({
  type: {type: String, required: true},
  user: {type: String, required: true},
  date: Date,
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
  offer: String,
}, timestampFormat)

const Interviews = mongoose.model('Interview', interviewSchema);

module.exports = Interviews;
