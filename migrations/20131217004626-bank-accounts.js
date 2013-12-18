var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('bank_accounts', { 
    id: { type: 'int', primaryKey: true, autoIncrement: true, unique: true },
    userId: { type: 'int', unique: true, notNull: true }
  }, callback);
}

exports.down = function(db, callback) {
  db.dropTable('bank_accounts', callback);
};
