const mongoose = require("mongoose");
const slugify = require("slugify");
const { marked } = require("marked");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const domPurify = createDomPurify(new JSDOM().window);

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
const talentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    debutDate: { type: Date, required: true },
    unitName: { type: String, required: true },
    youtube: { type: String, required: true },
    twitter: { type: String, required: true },
    bioBlurb: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    sanitizedHTML: { type: String, required: true },
  },
  { timestamps: true }
);

// received Talent submission data
// ---- we are here ----
// validated Talent submission data
// created Talent document

talentSchema.pre("validate", function (next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }

  if (this.bioBlurb) {
    const parsedMarkdown = marked.parse(this.bioBlurb); // converted HTML, not sanitized
    const sanitizedMarkdown = domPurify.sanitize(parsedMarkdown);
    this.sanitizedHTML = sanitizedMarkdown;
  }

  // always last in your middleware, per middleware function
  next();
});

module.exports = mongoose.model("Talent", talentSchema);
