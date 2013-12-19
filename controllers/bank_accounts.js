var BankAccount = require('../models/bank_account');

module.exports = (function(){
	function userIndex(req, res) {

  }
  
  function create(req, res) {

	}

  function index(req, res) {
    BankAccount.findAll()
		.success(function(bankAccounts){
			res.send(bankAccounts);
		})
		.error(function(err){
			res.send({ error: err });
		})
	}

	return {
		userIndex: userIndex,
		create: create,
		index: index
	}
})();
