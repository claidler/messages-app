import { Router } from 'express';
import multer from 'multer';
import { sessionCheck } from '../middleware/sessionCheck';
import UserController from '../controllers/userController';

export const userRouter = Router();
const upload = multer();

userRouter.get('/user', [sessionCheck], UserController.getUser);
userRouter.post('/login', [upload.none()], UserController.loginUser);
userRouter.get('/logout', UserController.logoutUser);
userRouter.post('/user', [upload.none()], UserController.createUser);

export default userRouter;
