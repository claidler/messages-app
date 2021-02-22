import 'reflect-metadata';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import './db';

import userRouter from './routes/userRouter';
import messageRouter from './routes/messageRouter';

const port = process.env.PORT;

dotenv.config();

const RedisStore = connectRedis(session);

export const redisClient = redis.createClient({
	host: process.env.REDIS_URL,
	port: 6380,
});

const app = express();

const corsOptions = {
	origin: process.env.CORS_ORIGIN,
	credentials: true,
};

const hour = 3600000;
app.use(
	session({
		name: 'userSession',
		store: new RedisStore({ client: redisClient }),
		secret: 'oxehealth-secret',
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 8 * hour, sameSite: 'none' },
	})
);

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRouter);
app.use(messageRouter);

app.get('/', (_: Request, res: Response) => {
	res.json({ message: 'Oxehealth server is running' });
});

const server = app.listen(port, () => {
	console.log(`Oxehealth server listening at ${port}`);
});

module.exports = server;
