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
	secret: 'string',
	userId: 'string',
};
module.exports = { connectionOptions, userSchemaOptions };
