var BankAccount = require('../models/bank_account');

module.exports = (function(){
	function userIndex(req, res) {
		BankAccount.findAll({ where: { userId: req.params.userId }})
    .success(function(bankAccounts){
			res.send(bankAccounts);
		})
		.error(function(err){
			res.send({ error: err });
		});
  }
  
  function create(req, res) {
    if (req.params.userId) {
			BankAccount.create({
		    userId: req.params.userId,	
			})
			.success(function(bankAccount){
				res.send(bankAccount);
			})
			.error(function(err){
				res.send({ error: err });
			});
		} else {
			res.send({ error: 'userId parameter required' });
		}
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
