import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { createPassword, comparePassword } from '../utils/password';
import { User } from '../entity/User';

class UserController {
	async getUser(req: Request, res: Response): Promise<void> {
		try {
			const id = req.session.userId;
			const user = await getRepository(User).findOne(id);
			res.send(user);
		} catch (err) {
			console.error(err);
			res.status(500).send({ message: 'Server error' });
		}
	}

	async createUser(req: Request, res: Response): Promise<void> {
		try {
			const { username, password: _password } = req.body;
			const password = await createPassword(_password);
			const newUser = getRepository(User).create({
				username,
				password,
			});
			const savedUser = await getRepository(User).save(newUser);
			req.session.userId = savedUser.id;
			res.send({ data: savedUser });
		} catch (err) {
			console.error(err);
			res.status(500).send({ message: 'Server error' });
		}
	}

	async loginUser(req: Request, res: Response): Promise<void> {
		try {
			const { username, password } = req.body;
			const user = await getRepository(User).findOne({
				username: username,
			});
			if (!user) {
				res.status(401).send({
					message: 'No user found with this username. Please try again.',
				});
				return;
			}
			const passwordIsValid = await comparePassword(user.password, password);
			if (!passwordIsValid) {
				res
					.status(401)
					.send({ message: 'Incorrect password. Please try again.' });
				return;
			}
			req.session.userId = user.id;
			res.send({ data: user });
		} catch (err) {
			console.error(err);
			res.status(500).send({ message: 'Server error' });
		}
	}

	async logoutUser(req: Request, res: Response): Promise<void> {
		try {
			req.session.destroy((err) => console.error(err));
			res.send({ data: 'User logged out' });
		} catch (err) {
			console.error(err);
			res.status(500).send({ message: 'Server error' });
		}
	}
}

export default new UserController();
