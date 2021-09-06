import { RequestWithUser } from '../interfaces/request.interface';
import { Response } from 'express';
import Data from '../db/models/data.model';

export const dataGetController = async (
	req: RequestWithUser,
	res: Response,
): Promise<void> => {
	const payload = await Data.find({ userId: req.user?.id });
	payload.length > 0
		? res.status(200).json({ payload })
		: res.status(400).json({ msg: 'Nothing found' });
};

export const dataPostController = async (
	req: RequestWithUser,
	res: Response,
): Promise<void> => {
	const { secret } = req.body;
	if (secret && secret.trim().length > 0) {
		const data: any = new Data({ secret, userId: req.user?.id });
		await data.save();
		res.status(200).json({
			msg: 'Data saved',
			Payload: { secret: data.secret },
		});
	} else {
		res.status(400).send({ msg: 'Secret cannot be empty' });
	}
};
