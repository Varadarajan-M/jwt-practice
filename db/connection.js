const mongoose = require('mongoose');
const { connectionOptions } = require('./options');

const connectDb = () => {
	mongoose.connect('mongodb://localhost:27017/jwtDb', connectionOptions);
	const connection = mongoose.connection;
	connection.on('connected', () => {
		console.log('connected to database');
	});
};

module.exports = connectDb;
