import userRouter from '../features/users/route';
import profileRouter from '../features/profiles/route';

const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, userRouter);
  app.use(apiPrefix, profileRouter);
  return app;
};

export default routes;
