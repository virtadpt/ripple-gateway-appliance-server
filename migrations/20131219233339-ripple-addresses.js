var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('ripple_addresses', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },	 	
    userId: { type: 'int', notNull: true },
    managed: { type: 'boolean', default: false, notNull: true},
    address: { type: 'string', notNull: true, unique: true },
    type: { type: 'string', notNull: true }
	}, callback);
};

exports.down = function(db, callback) {
	db.dropTable('ripple_addresses', callback);
};
