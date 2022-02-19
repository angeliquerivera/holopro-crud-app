const express = require("express");
const talentsRouter = express.Router();

/**
 * Handles all /talents routes
 */

// /talents
talentsRouter.get("/", (req, res) => {
  res.send("On talents' index page.");
});

// /talents/new
talentsRouter.get("/new", (req, res) => {
  res.render("talents/new");
});

module.exports = talentsRouter;
