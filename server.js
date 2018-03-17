// Dependencies
//=====================
var express = require('express');
var bodyParser = require('body-parser');

var db = require('./models');

// Express Configuration
//======================
var app = express();
var PORT = process.env.PORT || 8080;

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Access public files
app.use(express.static('./public'));

// Router
// ========================
// require('./app/routes/api-routes.js')(app);
// require('./app/routes/html-routes.js')(app);

// Listener
// =======================
// db.sequelize.sync().then(function() {
  app.listen(function(err) {
    if (err) {
      console.error("ERROR: " + stack.err);
      return;
    }
    console.log("*** Listening on PORT: " + PORT + " ***");
  })
// })


// Some fancy Sequelize thing goes below here...
//  ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
