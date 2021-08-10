const bcrypt = require('bcrypt');

const hashPassword = async (password) => bcrypt.hash(password, 12);

const comparePassword = async (password, userPassword) =>
	bcrypt.compare(password, userPassword);

module.exports = {
	hashPassword,
	comparePassword,
};
