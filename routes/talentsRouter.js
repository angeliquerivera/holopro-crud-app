const express = require("express");
const Talent = require("../models/Talent");
const holoUnits = require("../data/holopro_units.json");

const talentsRouter = express.Router();

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
talentsRouter.post("/", async (req, res) => {
  const { name, month, day, year, unitName, youtube, twitter, bioBlurb } =
    req.body;

  // Method 1: Converting Strings to Numbers, passing each as integer inputs
  // const debut = new Date(Number(year), Number(month) - 1, Number(day));

  // Method 2: Interpolating the String values into a datestring
  const debutDate = new Date(`${year}-${month}-${day}`);

  try {
    const newTalent = await Talent.create({
      name,
      debutDate,
      unitName,
      youtube,
      twitter,
      bioBlurb,
    });
    res.redirect(`talents/${newTalent.id}`);
  } catch (error) {
    console.error("There has been an error in trying to create a new talent.");
    console.error(error);
    res.render("talents/new", { talent: req.body, holoUnits });
  }
});

// https://excalidraw.com/#room=da5deb14eb8e323f7924,AP9IZoRBcK5KqLPeTBM2lQ

// /talents/new
talentsRouter.get("/new", (req, res) => {
  res.render("talents/new", { talent: new Talent(), holoUnits });
});

// /talents/:id

// sample Talent id: 6219684211690313d16cc8ec
talentsRouter.get("/:id", (req, res) => {
  res.send(`Current talent id is ${req.params.id}`);
});

module.exports = talentsRouter;
