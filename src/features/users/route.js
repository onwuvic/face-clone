import express from 'express';
import UserController from './UserController';

const userRouter = express.Router();

userRouter.post('/users', UserController.create);

export default userRouter;
