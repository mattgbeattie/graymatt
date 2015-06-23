// grab the mongoose module and schema
var Schema = mongoose.Schema;

console.log('Transactions ran');

// connect
mongoose.connect('mongodb://localhost/graymatt');

// define the schema
var transactionsSchema = new Schema({
	id : Number,
	ticker : String,
	buyprice : Number,
	buytimestamp : Date,
	sellprice : Number,
	selltimestamp : Date
});

// define the model
var Transaction = mongoose.model('Transaction', transactionsSchema);

module.exports = Transaction;