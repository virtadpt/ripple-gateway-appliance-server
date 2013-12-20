var Balance = require('../models/balance.js');

module.exports = (function(){
  function userBalances(req, res) {
    Balance.findAll({ where: { userId: req.body.userId }})
		.success(function(balances) {
		  res.send(balances);
		})
		.error(function(err){
			res.send({ error: err });
		});
	} 

  function index(req, res){
		Balance.findAll()    
		.success(function(balances) {
			res.send(balances);
		})
		.error(function(err) {
			res.send({ error: err });
		});
	}

	return {
		userBalances: userBalances,
		index: index
	}
})();
