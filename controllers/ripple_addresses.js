var RippleAddress = require('../models/ripple_address');

module.exports = (function(){
  function userIndex(req, res) {
	}
  
  function create(req, res) {
		if (req.body.userId) {
			RippleAddress.create({
				userId: req.body.userId
			})
			.success(function(address){
				res.send(address);
			})
			.error(function(err){
				res.send({ error: err });
			});
		}
	}
 
  function index(req,res) {
		RippleAddress.findAll()
		.success(function(addresses){
			res.send(addresses);
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
