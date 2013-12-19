var User = require('../models/user.js');

module.exports = (function() {
	function index(req, res) {
		User.all().success(function(users) {
			res.send(users);
		});
	}

  function create(req, res) {
		if (req.body.name && req.body.password) {
			var salt = utils.generateSalt();
			var passwordHash = utils.saltPassword(req.body.password, salt);

			var user = User.build({
				name: req.body.name,
				salt: salt,
				passwordHash: passwordHash,
				federationTag: 'federationTag',
				federationName: 'federationName'
			});

			user.save()
			.success(function() {
				res.send({ status: 'user created', user: user })
			})
			.error(function(err) {
				res.send({ status: 'user not created', error: err });
			});
		} else {
			res.send({ error: 'required params: name, password' });
		}
	}
	
	return {
		index: index,
		create: create
	}
})();
