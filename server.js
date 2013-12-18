var express = require('express'),
		fs      = require('fs'),
    http    = require('http'),
    https   = require('https'),
    path    = require('path'),
    pg      = require('pg'),
    db      = require('./config/sequelize.js'),
    User    = require('./models/user.js'),
    utils   = require('./utils.js');

var WithdrawalsCtrl = require('./controllers/withdrawals.js');
var DepositsCtrl = require('./controllers/deposits.js');

var privateKey = fs.readFileSync('/home/ssh/privatekey.pem').toString();
var certificate = fs.readFileSync('/home/ssh/certificate.pem').toString();
var credentials = { key: privateKey, cert: certificate };
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.favicon())
app.use(express.bodyParser())
app.use(express.cookieParser());
app.use(express.session({secret: 'oi09ajsdf09fwlkej33lkjpx'}));
app.use(express.methodOverride())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/users', function(req, res) {
	User.all().success(function(users) {
    res.send(users);
	});
})

// Registration
app.post('/api/users', function(req, res) {
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
});

// Create a bank transaction if allowed by session
app.post('/api/bank_transactions', function(req, res) {
  BankTx.build().save();
});

// Create a ripple transaction if allowed by session
app.post('/api/ripple_transactions', function(req, res) {
  RippleTx.build().save();
});

// Get a user's balances if allowed by session
app.get('/api/users/:userId/balances', function(req, res) {
  Balance.find({ where : { userId: req.query.userId }})
  .error(function(err){
		res.send({ error: 'error finding balances for '+req.query.userId });
	})
  .success(function(balances){
		res.send({ balances: balances });
  });
});

// Authentication
app.post('/api/session', function(req, res) {
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
});

app.get('/api/session', function(req, res) {
  res.send({
		session: req.session.session
	})
});

//app.get('/api/withdrawals', WithdrawalsCtrl.index);
//app.post('/api/withdrawals', WithdrawalsCtrl.create);

app.get('/api/deposits', DepositsCtrl.index);
app.post('/api/withdrawals', DepositsCtrl.create);

var port = process.env.PORT || 443;
https.createServer(credentials,app).listen(port);
console.log('Listening on port '+port);

