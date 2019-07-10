import express from 'express';
import PostController from './PostController';


const postRouter = express.Router();

postRouter.post('/posts', PostController.create);

export default postRouter;
