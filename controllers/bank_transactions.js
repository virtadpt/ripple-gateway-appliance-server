var BankTransaction = require("../models/bank_tx.js");

module.exports = (function(){
	function userIndex(req, res){
    BankTransaction.findAll({ where: { userId: req.body.userId }})
	  .success(function(transactions) {
			res.send(transactions);
		})	
		.error(function(err) {
			res.send({ error: err });
		});
	}

	function index(req, res) {
    BankTransaction.findAll()
    .success(function(transactions){
			res.send(transactions);
    })
		.error(function(err){
			res.send({ error: err });
		});
	}

  return {
		userIndex: userIndex,
		index: index
	}
})();
