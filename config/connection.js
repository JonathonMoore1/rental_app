// Dependencies
require('dotenv').config();
var pw = process.env.MYSQL_PW;

var Sequelize = require('sequelize');
var sequelize = new Sequelize('rentalApp_db', 'root', pw, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false,
  freezeTableName: true,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// var Entries = sequelize.define('entries', {

// })

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//================


// require('dotenv').config();
// var mysql = require('mysql2');
// var pw = process.env.MYSQL_PW;

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: pw,
//   port: 3306,
//   database: 'rentalApp_db'
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error(new Error("ERROR: " + stack.err));
//     return;
//   }
//   console.log("\nMYSQL CONNECTION SUCCESSFUL\n=================================");
// });

// module.exports = connection;