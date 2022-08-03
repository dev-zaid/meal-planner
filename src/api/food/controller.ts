import { Food } from '../../helper/models/schema';
import ErrorClass from '../../helper/types/error';
import database from '../../loaders/database';

export const addFoodData = async (food: Food[]) => {
  try {
    const data = await (await database()).collection<Food>('food').insertMany(food);
    if (!data) {
      throw new ErrorClass('Error adding food data', 400);
    }
    console.log(`${data.insertedCount} food data added`);
    return { success: true, status: 201, message: `${data.insertedCount} food data added` };
  } catch (error) {
    throw new ErrorClass(error.message ?? 'Data updation failed', error.status.code ?? 500);
  }
};
