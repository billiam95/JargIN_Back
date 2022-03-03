const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
type: String,
user: String,
description: String,
link: String
})

const Resources = mongoose.model('Resource', resourceSchema);

module.exports = Resources;
