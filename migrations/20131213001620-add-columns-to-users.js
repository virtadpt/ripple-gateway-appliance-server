var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  console.log('add the columns here');
  callback();
};

exports.down = function(db, callback) {
  callaback();
};
