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

	}
  return {
		index: index,
		create: create
  }
})();

module.exports = DepositsCtrl;

