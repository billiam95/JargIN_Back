const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
user: {type: String, required: true},
comment: {type: String, required: true},
<<<<<<< HEAD
}, {timestamps: true})
=======
}, {timestamps:true})
>>>>>>> 1244d75d3e3c786ba9f78b9d92ed49b11bb3fe91

const Comments = mongoose.model('Comment', commentSchema);

module.exports = Comments;
