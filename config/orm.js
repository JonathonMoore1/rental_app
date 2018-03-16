var connection = require('./connection.js');

var orm = {
    selectAll: function(table, cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(
            queryString, [table], 
            function(err, res) {
                if (err) throw err;
                cb(res);
            }
        );
    },
    insertOne: function(table, col, val, cb) {
        var queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(
            queryString, [table, col, val],
            function(err, res) {
                if (err) throw err;
                cb(res);
                console.log(queryString);
            }
        );
    },
    resetAll: function(table, cb) {
        var queryString = 'TRUNCATE TABLE ' + table;
        connection.query(
            queryString, [table],
            function(err, res) {
                if (err) throw err;
                cb(res);
            }
        )
    }
}

module.exports = orm;