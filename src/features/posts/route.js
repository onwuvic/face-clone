import express from 'express';
import PostController from './PostController';
import Authentication from '../../middlewares/authentication';


const postRouter = express.Router();

postRouter.post('/posts', Authentication.tokenAuthentication, PostController.create);

export default postRouter;
