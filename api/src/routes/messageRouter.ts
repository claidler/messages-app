import { Router } from 'express';
import multer from 'multer';
import { sessionCheck } from '../middleware/sessionCheck';
import MessageController from '../controllers/messageController';

export const messageRouter = Router();
const upload = multer();

messageRouter.get('/messages', [sessionCheck], MessageController.getMessages);
messageRouter.post(
	'/message',
	[upload.none(), sessionCheck],
	MessageController.createMessage
);
messageRouter.patch(
	'/message/:id',
	[upload.none(), sessionCheck],
	MessageController.updateMessage
);
messageRouter.delete(
	'/message/:id',
	[sessionCheck],
	MessageController.deleteMessage
);

export default messageRouter;
