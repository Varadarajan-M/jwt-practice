const express = require('express');
const connectDb = require('./db/connection');
const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');
const dataRoute = require('./routes/dataRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));

connectDb();

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/data', dataRoute);
app.listen(7000, () => {
	console.log(`Server started on port 7000`);
});
