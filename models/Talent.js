const mongoose = require("mongoose");

/**
 * The schema for our form fields
 *
 * name: String (required)
 * debutDate: Date (required)
 * unitName: String (required)
 * youtubeLink: String (required)
 * twitterLink: String (required)
 * bioBlurb: String (required)
 */

const talentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  debutDate: { type: Date, required: true },
  unitName: { type: String, required: true },
  youtube: { type: String, required: true },
  twitter: { type: String, required: true },
  bio: { type: String, required: true },
});

module.exports = mongoose.model("Talent", talentSchema);
