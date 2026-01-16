const mongoose = require('mongoose');
const shortid = require('shortid');

const urlSchema = new mongoose.Schema(
  {
    shortCode: {
      type: String,
      unique: true,
      default: shortid.generate,
    },
    longUrl: {
      type: String,
      required: true,
      trim: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Url', urlSchema);
