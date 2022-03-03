const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
user: String,
type: String,
comment: String,
timeStamp: String
})

const Comments = mongoose.model('Comment', commentSchema);

module.exports = Comments;
