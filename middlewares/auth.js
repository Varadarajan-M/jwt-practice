require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = authenticateUser = (req, res, next) => {
	const { authorization } = req.headers;
	const s = authorization.split(' ');
	const token = s[1];
	jwt.verify(token, process.env.SECRET_KEY, (err, userDetails) => {
		if (err) {
			res.json({ message: 'Authentication failed' });
		} else {
			req.user = userDetails;
			next();
		}
	});
};
