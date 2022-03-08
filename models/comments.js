const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: {type: String, required: true},
    comment: {type: String, required: true},
}, {timestamps: true})

const Comments = mongoose.model('Comment', commentSchema);

module.exports = Comments;
