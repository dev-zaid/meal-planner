import { NextFunction, Router, Request, Response } from 'express';
import { foodSchema } from '../../helper/models/schema';
import LoggerInstance from '../../loaders/logger';
import { validate } from '../../middleware/validate';
import { addFoodData } from './controller';

const foodRouter = Router();

foodRouter.post('/add', validate('body', foodSchema), handleAddData);

async function handleAddData(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await addFoodData(req.body.foodData);
    if (result.success) {
      res.status(result.status).json({ success: true, message: result.message });
    }
  } catch (error) {
    LoggerInstance.error(error);
    next(error);
  }
}

export default foodRouter;
