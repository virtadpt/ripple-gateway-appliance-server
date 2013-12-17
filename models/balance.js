var Sequelize = require('sequelize');
var db = require('../db');

var Balance = sequelize.define('balance', {
  id: { 
		type: Sequelize.INTEGER, 
		primaryKey: true,
		autoIncrement: true,
		unique: true,
		notNull: true
	},
  user: { type: Sequelize.INTEGER, notNull: true },
  currency: { type: Sequelize.STRING, notNull: true },
  amount: { type: Sequelize.DECMIAL, notNull: true }
});

module.exports = Balance;
