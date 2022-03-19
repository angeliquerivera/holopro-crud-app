const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Talent = require("./models/Talent");

// Local imports come after node_modules imports
const talentsRouter = require("./routes/talentsRouter");

const app = express();

/**
 * Server settings
 */
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

/**
 * Router route assignments
 */
app.use("/talents", talentsRouter);

/**
 * Server index route
 */
app.get("/", async (req, res) => {
  try {
    const talents = await Talent.find().sort({ debutDate: "asc" });
    res.render("talents/index", { talents });
  } catch (err) {
    console.error(err);
  }
});

/**
 * Where to view hot server on JS action
 */
app.listen(4269, () => {
  console.log("¡Yo, the server's running on port 4269!");
});

/**
 * Mongoose invocation and nested callback functionality:
 *
 * mongoose connects express server to specific MongoDB database, on-connection callback
 *    reporting successful connection, handle errors CB
 *        reporting database errors
 */
mongoose.connect("mongodb://localhost/holoproTalents", () => {
  console.log("Connected to holoproTalents DB!"),
    (err) => {
      console.error("holoproTalents DB error:");
      console.error(err);
    };
});
