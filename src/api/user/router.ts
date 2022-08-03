import { NextFunction, Router, Request, Response } from 'express';
import { userSchema } from '../../helper/models/schema';
import LoggerInstance from '../../loaders/logger';
import { validate } from '../../middleware/validate';
import { addUserData } from './controller';

const userRouter = Router();

userRouter.post('/add', validate('body', userSchema), handleAddData);

async function handleAddData(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await addUserData(req.body.foodData);
    if (result.success) {
      res.status(result.status).json({ success: true, message: result.message });
    }
  } catch (error) {
    LoggerInstance.error(error);
    next(error);
  }
}

export default userRouter;
