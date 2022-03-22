const { Router } = require("express");
const Talent = require("../models/Talent");
const holoUnits = require("../data/holopro_units.json");

const talentsRouter = Router();

/**
 * Handles all /talents routes
 */

// /talents
talentsRouter.get("/", async (req, res) => {
  const someTalent = await Talent.findOne();
  res.send(someTalent);
});

// https://www.youtube.com/channel/UCAWSyEs_Io8MtpY3m-zqILA
// https://twitter.com/momosuzunene

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
talentsRouter.post(
  "/",
  async (req, res, next) => {
    req.talent = new Talent();
    next();
  },
  saveTalentAndRedirect("new")
);

// https://excalidraw.com/#room=da5deb14eb8e323f7924,AP9IZoRBcK5KqLPeTBM2lQ

// /talents/new
talentsRouter.get("/new", (req, res) => {
  res.render("talents/new", { talent: new Talent(), holoUnits });
});

// /talents/:id

// 1. prep the route for DB interaction
// 2. fetch the Talent
// 3. Redirect when no Talent found
// 4. Render the single Talent if found
// 5. Create the single Talent template
talentsRouter.get("/:slug", async (req, res) => {
  try {
    const talent = await Talent.findOne({ slug: req.params.slug });
    if (talent === null) {
      res.redirect("/");
    }
    res.render("talents/show", { talent });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
});

/**
 * DELETE /talents/:id
 * - Grab id from route
 * - Use id to find talent documents in DB
 * - Delete that document
 * - Redirect to index page
 */
talentsRouter.delete("/:id", async (req, res) => {
  await Talent.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

/**
 * GET /talents/edit/:id
 * - finding the Talent document in DB using route-param "id"
 * - we had a conversion from month, day, year -> debutDate; convert back to single values
 * - render the 'edit' template; pass down found Talent data; holoUnits data
 */
talentsRouter.get("/edit/:id", async (req, res) => {
  const fetchedTalent = await Talent.findById(req.params.id);
  let { name, debutDate, unitName, youtube, twitter, bioBlurb } = fetchedTalent;

  /**
   * `debutDate` is instance of Date
   */
  const month = debutDate.getMonth() + 1;
  const day = debutDate.getUTCDate();
  const year = debutDate.getFullYear();

  /**
   * Create a new Talent instance to pass down based on derived `debutDate` data
   */
  const recreatedTalent = {
    id: req.params.id,
    name,
    month,
    day,
    year,
    unitName,
    youtube,
    twitter,
    bioBlurb,
  };

  console.log(recreatedTalent.id);

  res.render("talents/edit", {
    talent: recreatedTalent,
    holoUnits,
  });
});

/**
 * Based on FORM action URL: "/talents/<%= talent.id %>?_method=PUT"
 * `talent.id` comes from extracted `req.params.id`
 */
talentsRouter.put(
  "/:id",
  async (req, res, next) => {
    req.talent = await Talent.findById(req.params.id);
    next();
  },
  saveTalentAndRedirect("edit")
);

/**
 * Shared functionality covers three things
 * - Get Talent from the request
 * - save it to the DB
 * - use the try/catch to determine next step
 */

function saveTalentAndRedirect(path) {
  return async (req, res) => {
    try {
      const talent = assignTalentValues(req.talent, req.body);
      await talent.save();
      res.redirect(`talents/${talent.slug}`);
    } catch (error) {
      console.error(
        "There has been an error in trying to create a new talent."
      );
      console.error(error);
      res.render(`talents/${path}`, { talent: req.body, holoUnits });
    }
  };
}

/**
 * @function assignTalentValues
 * @param {Object} oldTalent - the old Talent document instance
 * @param {Object} newTalentVals - the new values coming from the req.body submission to overwrite the oldTalent
 * @return {Object} the updated Talent document instance (unsaved)
 */
function assignTalentValues(oldTalent, newTalentVals) {
  const { name, month, day, year, unitName, youtube, twitter, bioBlurb } =
    newTalentVals;

  const newDebutDate = new Date(`${year}-${month}-${day}`);

  oldTalent.name = name;
  oldTalent.debutDate = newDebutDate;
  oldTalent.unitName = unitName;
  oldTalent.youtube = youtube;
  oldTalent.twitter = twitter;
  oldTalent.bioBlurb = bioBlurb;

  return oldTalent;
}
module.exports = talentsRouter;
