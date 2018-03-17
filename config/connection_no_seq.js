// require('dotenv').config();
var mysql = require('mysql2');
// var pw = "";

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  port: 3306,
  database: 'rentalApp_db'
});

connection.connect(function(err) {
  if (err) {
    console.error(new Error("ERROR: " + stack.err));
    return;
  }
  console.log("\nMYSQL CONNECTION SUCCESSFUL\n=================================");
});

module.exports = connection;