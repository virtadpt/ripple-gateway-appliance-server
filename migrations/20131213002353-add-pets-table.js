var dbm = require('db-migrate');

// with no table options
exports.up = function (db, callback) {
  console.log('add the columns here');
  callback();
}

// with table options
exports.down = function (db, callback) {
  db.dropTable('Pets', callback);
}
