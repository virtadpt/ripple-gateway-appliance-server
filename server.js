var express = require('express'),
		fs      = require('fs'),
    http    = require('http'),
    https   = require('https'),
    path    = require('path'),
    pg      = require('pg'),
    db      = require('./config/sequelize.js');

var WithdrawalsCtrl     = require('./controllers/withdrawals.js'),
		DepositsCtrl        = require('./controllers/deposits.js'),
		BalancesCtrl        = require('./controllers/balances.js'),
		BankAccountsCtrl    = require('./controllers/bank_accounts.js'),
		BankTransactionsCtrl         = require('./controllers/bank_transactions.js'),
		RippleTransactionsCtrl       = require('./controllers/ripple_transactions.js'),
		RippleAddressesCtrl = require('./controllers/ripple_addresses.js'),
		UsersCtrl           = require('./controllers/users.js'),
		SessionCtrl         = require('./controllers/session.js');

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

app.get('/api/users', UsersCtrl.index);
app.post('/api/users', UsersCtrl.create);
app.post('/api/session', SessionCtrl.create);
app.get('/api/session', SessionCtrl.index);

app.get('/api/users/:id/balances', BalancesCtrl.userBalances);
app.get('/api/users/:userId/bank_accounts', BankAccountsCtrl.userIndex);
app.get('/api/users/:userId/ripple_addresses', RippleAddressesCtrl.userIndex);
app.get('/api/users/:userId/bank_transactions', BankTransactionsCtrl.userIndex);
app.get('/api/users/:userId/ripple_transactions', RippleTransactionsCtrl.userIndex);

app.post('/api/users/:userId/bank_accounts', BankAccountsCtrl.create);
app.post('/api/users/:userId/ripple_addresses', RippleAddressesCtrl.create);

app.post('/api/ripple_transactions', RippleTransactionsCtrl.create);
app.post('/api/withdrawals', WithdrawalsCtrl.create);
app.post('/api/deposits', DepositsCtrl.create);

app.get('/api/withdrawals', WithdrawalsCtrl.index);
app.get('/api/deposits', DepositsCtrl.index);

app.get('/api/bank_accounts', BankAccountsCtrl.index);
app.get('/api/balances', BalancesCtrl.index);
app.get('/api/ripple_addresses', RippleAddressesCtrl.index);
app.get('/api/ripple_transactions', RippleTransactionsCtrl.index);

var port = process.env.PORT || 443;
https.createServer(credentials,app).listen(port);
console.log('Listening on port '+port);

