// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Variables
// =============================================================
/*
  [
    {
      name: Derp,
      phoneNumber: 123456789,
      email: derp@derp.com,
      id: 222 
    }
  ]
*/
let reservations = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Display current reservations
app.get("/api/current", function(req, res) {
    res.json(reservations)
});

app.post("/api/makereservation", function(req, res) {
  let reservation = req.body;
  reservations.push(reservation);
  res.json(reservation);
});

app.listen(PORT, function(err) {
  console.log("Listening on PORT",PORT);
});
