import { addMealData } from './controller';
import { NextFunction, Router, Request, Response } from 'express';
import { mealSchema } from '../../helper/models/schema';
import LoggerInstance from '../../loaders/logger';
import { validate } from '../../middleware/validate';

const mealRouter = Router();

mealRouter.post('/add', validate('body', mealSchema), handleAddData);

async function handleAddData(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await addMealData(req.body.foodData);
    if (result.success) {
      res.status(result.status).json({ success: true, message: result.message });
    }
  } catch (error) {
    LoggerInstance.error(error);
    next(error);
  }
}

export default mealRouter;
