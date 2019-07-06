import express from 'express';
import ProfileController from './ProfileController';


const profileRouter = express.Router();

profileRouter.get('/profiles', ProfileController.create);

export default profileRouter;
