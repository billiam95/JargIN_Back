const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
type: String,
user: String,
title: String,
description: String,
link: String
}, {timestamps:true})

const Resources = mongoose.model('Resource', resourceSchema);

module.exports = Resources;
