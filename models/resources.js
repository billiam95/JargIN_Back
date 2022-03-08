const mongoose = require('mongoose');

const timestampFormat = {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
  };

const resourceSchema = new mongoose.Schema({
type: String,
user: String,
title: String,
description: String,
link: String
}, timestampFormat)

const Resources = mongoose.model('Resource', resourceSchema);

module.exports = Resources;
