import { createConnection } from 'typeorm';
import { Message } from '../entity/Message';
import { User } from '../entity/User';

createConnection({
	type: 'mysql',
	host: process.env.DB_URL,
	port: 3306,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB,
	entities: [Message, User],
	synchronize: true,
	logging: false,
})
	.then((connection) => {
		console.log(`connected to mysql db: ${connection.name}`);
	})
	.catch((error) => console.log(error));
