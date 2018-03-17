// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var express = require("express");
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================


module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/renter", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/usersearch.html"));
  });

  app.get("/owner", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/owner.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
