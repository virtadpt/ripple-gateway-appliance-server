var Sequelize = require('sequelize');
var db = require('../db');

var RippleTx = sequelize.define('ripple_tx', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, notNull: true },
  toCurrency: { type: Sequelize.STRING, notNull: true },
  toAmount: { type: Sequelize.DECIMAL, notNull: true },
  fromCurrency: { type: Sequelize.STRING, notNull: true },
  fromAmount: { type: Sequelize.DECIMAL, notNull: true },
  issuance: { type: Sequelize.BOOLEAN, notNull: true },
  txHash: { type: Sequelize.STRING, notNull: true },
  txState: Sequelize.STRING
});

module.exports = User;
