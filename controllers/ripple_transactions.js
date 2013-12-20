var RippleTransactions = require('../models/ripple_transaction.js');

module.exports = (function(){

  function userIndex(req, res) {
		RippleAddress.findAll({ where: { userId: req.params.userId }})
		.success(function(rippleAddresses){
			rippleAddressIds = [];
			rippleAddresses.forEach(function(address){ 
				rippleAddressIds.push(address.id)
			});
			RippleTransactions.findAll({ where: { id: rippleAddressIds }})
			.success(function(rippleTransactions){
			  res.send(rippleTransactions);	
			})
			.error(function(err){
				res.send({ error: err });	
			});
		})
		.error(function(){
			res.send({ error: err });
		});
	}
  
  function create(req, res) {
    RippleTransaction.create({
			toAddress: req.body.toAddress,
			fromAddress: req.body.fromAddress,
			toCurrency: req.body.toCurrency,
			fromCurrency: req.body.fromCurrency,
			toAmount: req.body.toAmount,
			fromAmount: req.body.fromAmount,
			issuance: req.body.issuance,
			txHash: req.body.txHash,
			txState: req.body.txState
		})
		.success(function(rippleTransaction){
			res.send(rippleTransaction);
		})
		.error(function(err){
			res.send({ error: err });
		});
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
