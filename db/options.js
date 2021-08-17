const connectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
};
const userSchemaOptions = {
	email: 'string',
	password: 'string',
};
const dataSchemaOptions = {
	secret: { required: true, type: String },
	userId: {
		type: String,
	},
};
module.exports = { connectionOptions, userSchemaOptions, dataSchemaOptions };
