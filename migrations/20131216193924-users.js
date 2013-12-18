var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('users', { 
		id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: { type: 'string', notNull: true, unique: true },
    salt: { type: 'string', notNull: true },
    federationTag: { type: 'string', notNull: true },
    federationName: { type: 'string', notNull: true },
    passwordHash: { type: 'string', notNull: true },
    bankAccountId: { type: 'int'},
    kycId: { type: 'int' },
    createdAt: { type: 'datetime', notNull: true },
    updatedAt: { type: 'datetime' }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('users', callback);
  callback();
};
