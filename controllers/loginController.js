require('dotenv').config();
const User = require('../db/models/user.model');
const jwt = require('jsonwebtoken');
const { comparePassword } = require('../utils/helpers');
const secretKey = process.env.SECRET_KEY || null;

const loginController = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && password !== undefined) {
		const passwordMatched = await comparePassword(password, user.password);
		if (passwordMatched) {
			const payload = { email, id: user._id };
			const token = jwt.sign(payload, secretKey);
			res.status(200).send({ payload: { email: user.email, token } });
		} else {
			res.status(400).send({ msg: 'Invalid password' });
		}
	} else {
		res.status(400).send({ msg: 'Invalid Email' });
	}
};
module.exports = loginController;
