var zmq = require('zmq');


var consumer = zmq.socket('pull');

consumer.connect('tcp://127.0.0.1:5252');

var account = process.env.RIPPLE_ADDRESS;
console.log('listening for transactions on ', account);

function Transaction(data) {
  this.data = JSON.parse(data);
	if (this.data.transaction.account == account) {
		return new Incoming(data);
  } else {
		return new Issuance(data);
  }
}

function Issuance(data) {
  this.data = data;
}

function Incoming(data) {
  this.data = data;
}

consumer.on('message', function(message) {
	var transaction = new Transaction(message.toString());
	if (transaction instanceof Issuance) {
		console.log('issued some coin');
	} else if (transaction instanceof Incoming) {
		console.log('received some coin');
  }
	console.log(transaction.data);
  // all outgoing transactions should have a destination tag
	// that can be used to look up the ripple transcation in
  // the database

  // Incoming transactions might not have a destination tag
  // But their user account should be looked up in the database
  // based on the sender ripple address
});
