var Sequelize = require('sequelize');
var db = require('../config/sequelize');

var BankAccount = sequelize.define('bank_account', {
  id: { 
		type: Sequelize.INTEGER, 
		primaryKey: true,
		autoIncrement: true,
	},
  userId: { type: Sequelize.INTEGER, notNull: true }
});

module.exports = BankAccount;
