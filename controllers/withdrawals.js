var BankTransaction = require("../models/bank_tx.js");

module.exports = (function(){
	function index(req, res) {
    BankTransaction.findAll({ where: { deposit: false }})
		.success(function(bankTransactions){
			res.send(bankTransactions);
		})
		.error(function(err){
			res.send({error: err});
		})
	}

  function create(req, res) {
		var params = req.body;
		params.deposit = false;
		BankTransaction.create(params)
		.success(function(bankTransaction){
			res.send(bankTransaction);
		})
		.error(function(err){
			res.send({ error: err });
		});
	} 

  return {
		create: create,
		index: index
  }
})();
