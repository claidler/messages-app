import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Message } from '../entity/Message';

class MessageController {
	async getMessages(req: Request, res: Response): Promise<void> {
		try {
			const { userId } = req.session;
			if (!userId) {
				res.status(401).send({
					message: 'Unable to get messages. No user exists on this session',
				});
				return;
			}
			const messages = await getRepository(Message).find({
				where: {
					userId: userId,
				},
			});
			res.send({ data: messages });
		} catch (err) {
			console.error(err);
			res.status(500).send({ message: 'Server error' });
		}
	}

	async createMessage(req: Request, res: Response): Promise<void> {
		try {
			const { userId } = req.session;
			const { message } = req.body;
			if (!userId) {
				res.status(401).send({
					message: 'Unable to create message. No user exists on this session',
				});
				return;
			}
			const newMessage = getRepository(Message).create({
				userId: userId,
				message: message,
			});
			const savedMessage = await getRepository(Message).save(newMessage);
			res.send({ data: savedMessage });
		} catch (err) {
			console.error(err);
			res.status(500).send({ message: 'Server error' });
		}
	}

	async updateMessage(req: Request, res: Response): Promise<void> {
		try {
			const { id } = req.params;
			const { message } = req.body;
			const updatedMessage = await getRepository(Message).update(id, {
				message,
			});
			res.send({ data: updatedMessage });
		} catch (err) {
			res.status(500).send({ message: 'Server error' });
		}
	}

	async deleteMessage(req: Request, res: Response): Promise<void> {
		try {
			const { id } = req.params;
			const deletedMessage = await getRepository(Message).delete(id);
			res.send({ data: deletedMessage });
		} catch (err) {
			res.status(500).send({ message: 'Server error' });
		}
	}
}

export default new MessageController();
