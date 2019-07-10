import userRouter from '../features/users/route';
import profileRouter from '../features/profiles/route';
import postRouter from '../features/posts/route';

const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, userRouter);
  app.use(apiPrefix, profileRouter);
  app.use(apiPrefix, postRouter);
  return app;
};

export default routes;
