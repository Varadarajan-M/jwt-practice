import { RequestWithUser } from '../types/request.types';
import { verify } from 'jsonwebtoken';
import { Response, NextFunction } from 'express';

const authenticateUser = (
	req: RequestWithUser,
	res: Response,
	next: NextFunction,
) => {
	const { authorization } = req.headers;
	const token = authorization?.split(' ')[1];
	verify(
		token as string,
		process.env.SECRET_KEY as string,
		(err, userDetails) => {
			if (err) {
				res.json({ message: 'Authentication failed' });
			} else {
				req.user = userDetails;
				next();
			}
		},
	);
};

export default authenticateUser;
