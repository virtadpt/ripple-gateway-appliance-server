var BankTx = require("../models/bank_tx.js");

var DepositsCtrl = (function(){ 
	function index(req, res){
		BankTx.findAll({ where: { deposit: true }})
		.success(function(bank_txs){
			res.send(bank_txs);
		})
		.error(function(err){
			res.send({ error: err });
		});
	}

	function create(req, res){
		console.log('attempting to create a deposit');
		BankTx.create({
			deposit: true,
			currency: req.body.currency,
			cashAmount: req.body.cashAmount
		})
		.success(function(transaction){
			res.send({
				status: 'success',
				deposit: transaction,
			});
		})
		.error(function(err){
			res.send({ error: err });
		})
	}

  return {
		index: index,
		create: create
  }
})();

module.exports = DepositsCtrl;

