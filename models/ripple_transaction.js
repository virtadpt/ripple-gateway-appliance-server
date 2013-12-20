var Sequelize = require('sequelize');
var db = require('../config/sequelize');

var RippleTx = sequelize.define('ripple_transaction', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, notNull: true },
  toCurrency: { type: Sequelize.STRING, notNull: true },
  toAddress: { type: Sequelize.STRING, notNull: true },
  toCurrency: { type: Sequelize.STRING, notNull: true },
  toAmount: { type: Sequelize.DECIMAL, notNull: true },
  fromCurrency: { type: Sequelize.STRING, notNull: true },
  fromAmount: { type: Sequelize.DECIMAL, notNull: true },
  issuance: { type: Sequelize.BOOLEAN, notNull: true },
  txHash: { type: Sequelize.STRING, notNull: true },
  txState: Sequelize.STRING
});

module.exports = RippleTx;
