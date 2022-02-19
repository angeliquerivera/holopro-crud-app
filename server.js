const express = require("express");
const talentsRouter = require("./routes/talentsRouter");

// Test talent data import
const talents = require("./__test__/test_talents");

const app = express();

/**
 * Server settings
 */
app.set("view engine", "ejs");

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
