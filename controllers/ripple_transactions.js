var RippleTransactions = require('../models/ripple_transaction.js');

module.exports = (function(){
  function userIndex(req, res) {
	}
  
  function create(req, res) {

	}

  function index(req, res){
    RippleTransactions.findAll()
		.success(function(transactions){
			res.send(transactions);
		})
		.error(function(err){
			res.send({ error: err });
		});
  }

  return {
    userIndex: userIndex,
		create: create,
		index: index
	}
})();
