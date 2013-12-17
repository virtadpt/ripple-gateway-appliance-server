var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('ripple_txs', { 
		id: { type: 'int', primaryKey: true, autoIncrement: true, notNull: true, unique: true },
    issuance: { type: 'boolean', notNull: true },
    toCurrency: { type: 'string', notNull: true },
    toAmount: { type: 'decimal', notNull: true },
    destinationTag: { type: 'string' },
    fromCurrency: { type: 'string', notNull: true },
    fromAmount: { type: 'decimal', notNull: true },
    txState: { type: 'string' },
    txHash: { type: 'string', notNull: true, unique: true },
    createdAt: { type: 'datetime', notNull: true },
    updatedAt: { type: 'datetime' }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('ripple_txs', callback);
  callback();
};
