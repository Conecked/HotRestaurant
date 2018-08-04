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
      Name: Derp,
      PhoneNumber: 123456789,
      Email: derp@derp.com,
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

<<<<<<< HEAD
=======

>>>>>>> 8ca3e03b2b2a796373bf4a02b6b6412c60cf8d61
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

<<<<<<< HEAD
// Display current reservations
app.get("/api/current", function(req, res) {
    res.json(reservations)
});


=======
>>>>>>> 8ca3e03b2b2a796373bf4a02b6b6412c60cf8d61
app.post("/api/makereservation", function(req, res) {

  res.json("Derp");
})

app.listen(PORT, function(err) {
  console.log("Listening on PORT",PORT);
});

  console.log("Is you makin a post boi?!");
})
<<<<<<< HEAD
=======

>>>>>>> 8ca3e03b2b2a796373bf4a02b6b6412c60cf8d61
