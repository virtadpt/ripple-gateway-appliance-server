var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('ripple_transactions', { 
		id: { type: 'int', primaryKey: true, autoIncrement: true, notNull: true, unique: true },
    issuance: { type: 'boolean', notNull: true },
    toCurrency: { type: 'string', notNull: true },
    toAddress: { type: 'string', notNull: true },
    fromAddress: { type: 'string', notNull: true },
    toAmount: { type: 'decimal', notNull: true },
    fromCurrency: { type: 'string', notNull: true },
    fromAmount: { type: 'decimal', notNull: true },
    txHash: { type: 'string', notNull: true, unique: true },
    createdAt: { type: 'datetime', notNull: true },
    destinationTag: { type: 'string' },
    txState: { type: 'string' },
    updatedAt: { type: 'datetime' }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('ripple_transactions', callback);
  callback();
};
