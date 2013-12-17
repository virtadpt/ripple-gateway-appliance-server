var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    pg      = require('pg'),
    db      = require('./config/sequelize.js'),
    User    = require('./models/user.js'),
    utils   = require('./utils.js'),

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.favicon())
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/users', function(req, res) {
	User.all().success(function(users) {
    res.send(users);
	});
})

// Registration
app.post('/users', function(req, res) {
  if (req.body.name && req.body.password) {
		var salt = utils.generateSalt();
		var passwordHash = utils.saltPassword(req.body.password, salt);

    var user = User.build({
			name: req.body.name,
  	  salt: salt,
 			passwordHash: passwordHash
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
});

// Create a bank transaction if allowed by session
app.post('/bank_transactions', function(req, res) {
  BankTx.build().save();
});

// Create a ripple transaction if allowed by session
app.post('/ripple_transactions', function(req, res) {
  RippleTx.build().save();
};

// Get a user's balances if allowed by session
app.get('/users/:userId/balances', function(req, res) {
  Balance.find({ where : { userId: req.query.userId }})
  .error(function(err){
		res.send({ error: 'error finding balances for '+req.query.userId });
	})
  .success(function(balances){
		res.send({ balances: balances });
  });
});

// Authentication
app.post('/sessions', function(req, res) {
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
				res.send({ isValidUser: valid });
			} else {
				res.send({ error: 'user not found' });
			}
		});
  } else {
	  res.send({ error: 'required params: name, password' });
  }
});


app.listen(3000);
console.log('Listening on port 3000');

