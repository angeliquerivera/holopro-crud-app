const express = require("express");
const mongoose = require("mongoose");

// Local imports come after node_modules imports
const talentsRouter = require("./routes/talentsRouter");

// Test talent data import
const talents = require("./__test__/test_talents");

const app = express();

/**
 * Server settings
 */
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

/**
 * Router route assignments
 */
app.use("/talents", talentsRouter);

/**
 * Server index route
 */
app.get("/", (req, res) => {
  res.render("talents/index", { talents });
});

/**
 * Where to view hot server on JS action
 */
app.listen(4269, () => {
  console.log("¡Yo, the server's running on port 4269!");
});

mongoose.connect("mongodb://localhost/holoproTalents", () => {
  console.log("Connected to holoproTalents DB!"),
    (err) => {
      console.error("holoproTalents DB error:");
      console.error(err);
    };
});
