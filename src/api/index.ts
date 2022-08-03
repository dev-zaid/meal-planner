import { Router } from 'express';
import foodRouter from './food/router';
import mealRouter from './meal/router';
import userRouter from './user/router';

export default (): Router => {
  const app = Router();
  app.use('/food', foodRouter);
  app.use('/meal', mealRouter);
  app.use('/user', userRouter);
  return app;
};
