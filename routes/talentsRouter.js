const express = require("express");
const talentsRouter = express.Router();

/**
 * Handles all /talents routes
 */

talentsRouter.get("/", (req, res) => {
  res.send("On talents' index page.");
});

module.exports = talentsRouter;
