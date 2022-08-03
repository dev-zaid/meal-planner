import { ObjectID } from 'mongodb';
import { Food, Meal } from '../../helper/models/schema';
import ErrorClass from '../../helper/types/error';
import database from '../../loaders/database';

export const addMealData = async (meals: Meal[]) => {
  try {
    meals.map(async meal => {
      meal.foodItems.map(async foodID => {
        const data = await (await database()).collection<Food>('food').findOne({ _id: ObjectID(foodID) });
        if (!data) {
          throw new ErrorClass(`Provided foodID: ${foodID} not found in database.`, 406);
        }
      });
    });
    const data = await (await database()).collection<Meal>('meal').insertMany(meals);
    if (!data) {
      throw new ErrorClass('Error adding meal data', 400);
    }
    console.log(`${data.insertedCount} food data added`);
    return { success: true, status: 201, message: `${data.insertedCount} meal data added` };
  } catch (error) {
    throw new ErrorClass(error.message ?? 'Data updation failed', error.status.code ?? 500);
  }
};
