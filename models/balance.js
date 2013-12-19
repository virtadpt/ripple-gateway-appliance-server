var Sequelize = require('sequelize');
var db = require('../config/sequelize');

var Balance = sequelize.define('balance', {
  id: { 
		type: Sequelize.INTEGER, 
		primaryKey: true,
		autoIncrement: true,
	},
  userId: { type: Sequelize.INTEGER, notNull: true },
  currency: { type: Sequelize.STRING, notNull: true },
  amount: { type: Sequelize.DECIMAL, notNull: true }
});

module.exports = Balance;
