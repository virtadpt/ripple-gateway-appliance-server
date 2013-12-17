var Sequelize = require('sequelize');
var db = require('../config/sequelize.js');

var User = sequelize.define('user', {
  id: { 
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		notNull: true,
		unique: true,
	},
  federationTag: Sequelize.STRING,
  federationName: Sequelize.STRING,
  kycId: Sequelize.INTEGER,
  bankAccountId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  salt: Sequelize.STRING,
  passwordHash: Sequelize.STRING
}, {
  instanceMethods: {
    balance: function(currency) {
	    //return this.bankBalance(currency) - this.rippleBalance(currency);  	
    },
		bankDeposits: function(done) {
			BankTx.where({ userId: this.id, deposit: true }, done);
		},
    bankWithdrawals: function (done) {
			BankTx.where({ userId: this.id, deposit: false }, done);
		},
		balances: function() {},
		bankBalance: function(currency) {},
		bankBalances: function() {},
		rippleBalance: function(currency) {},
		rippleBalances: function() {} 
  } 
});

module.exports = User;
