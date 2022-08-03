import { ObjectID } from 'mongodb';
import { Meal, User } from '../../helper/models/schema';
import ErrorClass from '../../helper/types/error';
import database from '../../loaders/database';

export const addUserData = async (user: User) => {
  try {
    user.mealPlan.map(async meal => {
      meal.mealsReference.map(async mealID => {
        const data = await (await database()).collection<Meal>('meal').findOne({ _id: ObjectID(mealID) });
        if (!data) {
          throw new ErrorClass(`Provided mealID: ${mealID} not found in database.`, 406);
        }
      });
    });
    const data = await (await database()).collection<User>('user').insertOne(user);
    if (!data) {
      throw new ErrorClass('Error adding food data', 400);
    }
    return { success: true, status: 201, message: 'User data added' };
  } catch (error) {
    throw new ErrorClass(error.message ?? 'Data updation failed', error.status.code ?? 500);
  }
};
