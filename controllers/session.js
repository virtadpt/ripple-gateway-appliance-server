var User = require('../models/user.js'),
    utils   = require('../utils.js');

module.exports = (function(){
	function index(req, res) {
		res.send({
			session: req.session.session
		});
	}

	function create(req, res) {
		req.session.session = null;
		var user, valid;
		if (req.body.name && req.body.password) {
			User.findAll({ where: { name: req.body.name }})
			.error(function(err){
				res.send({ error: 'user not found' });
			})
			.success(function(results){
				user = results[0];
				if (user) {
					valid = utils.verifyPassword(req.body.password, user.salt, user.passwordHash);
					if (valid) {
						req.session.session = true;
					}
					res.send({ isValidUser: valid });
				} else {
					res.send({ error: 'user not found' });
				}
			});
		} else {
			res.send({ error: 'required params: name, password' });
		}
	}
	
	return {
		create: create,
		index: index
	}
})();
