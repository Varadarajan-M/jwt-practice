const Data = require('../db/models/data.model');

const dataGetController = async (req, res) => {
	const payload = await Data.find({userId:req.user.id})
	payload.length > 0 ? res.status(200).json({payload}) : res.status(400).json({msg:"Nothing found"});
};

const dataPostController = async (req, res) => {
	const { secret } = req.body;
	if (secret && secret.trim().length > 0) {
		const { id: userId } = req.user;
		const data = new Data({ secret, userId });
		await data.save();
		res.status(200).json({msg:"Data saved", Payload :{ secret : data.secret}});
	} else {
		res.status(400).send({ msg: 'Secret cannot be empty' });
	}
};

module.exports = { dataGetController, dataPostController };
