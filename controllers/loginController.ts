import { Request, Response } from 'express';
import User from '../db/models/user.model';
import { sign } from 'jsonwebtoken';
import { comparePassword } from '../utils/utils';

const loginController = async (req: Request, res: Response): Promise<void> => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && password !== undefined) {
		const passwordMatched: boolean = await comparePassword(
			password,
			user.password,
		);

		if (passwordMatched) {
			const payload = { email, id: user._id };
			const token: string = sign(
				payload,
				process.env.SECRET_KEY as string,
				{
					expiresIn: '1m',
				},
			);

			res.status(200).send({ payload: { email: user.email, token } });
		} else {
			res.status(400).send({ msg: 'Invalid password' });
		}
	} else {
		res.status(400).send({ msg: 'Invalid Email' });
	}
};

export default loginController;
