import { config } from 'dotenv';
import express, { Application } from 'express';
import connectDb from './db/connection';
import loginRouter from './routes/login.route';
import registerRouter from './routes/register.route';
import dataRouter from './routes/data.route';

config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/data', dataRouter);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
