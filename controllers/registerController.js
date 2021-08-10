const mongoose = require('mongoose');
const User = require('../db/models/user.model');
const { hashPassword } = require('../utils/helpers');

const registerController = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user === null) {
		const newUser = new User({
			email,
			password: await hashPassword(password),
		});
		await newUser.save();
		res.status(201).send({ msg: 'Registered' });
	} else {
		res.status(503).send({ msg: 'User already exists' });
	}
};

module.exports = registerController;
