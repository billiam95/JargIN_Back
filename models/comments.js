const commentSchema = new mongoose.Schema({
user: String,
type: String,
comment: String,
timeStamp: String
})

const Comments = mongoose.model('Interview', commentSchema);

module.exports = Comments;
