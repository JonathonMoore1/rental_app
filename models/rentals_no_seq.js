// Import ORM from orm.js
var orm = require('../config/orm.js');

// ORMs
var rentals = {
    selectAll: function(cb) {
        orm.selectAll('Rentals', function(res) {
            cb(res);
        });
    },
    insertOne: function(val, cb) {
        orm.insertOne('Rentals', 'item', val, function(res) {
            cb(res);
        });
    },
    resetAll: function(table, cb) {
        orm.resetAll('Rentals', function(res) {
            cb(res);
        })
    }
};

// Export ORMs
module.exports = rentals;