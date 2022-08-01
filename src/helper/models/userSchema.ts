import { array, date, InferType, mixed, number, object, ObjectSchema, string } from 'yup';

enum unitsENum {
  KG = 'kg',
  ML = 'ml',
  L = 'l',
  G = 'g',
  item = 'item',
}

enum mealCategory {
  BREAKFAST = 'BREAKFAST',
  LUNCH = 'LUNCH',
  EVENINGSNACK = 'EVENINGSNACK',
  DINNER = 'DINNER',
}

const user = {
  name: string().required(),
  calorieRequirement: string().required(),
  mealPlan: array()
    .of(object().shape({ date: date().required(), mealsReference: string().required() }))
    .required(),
};

const meal = {
  category: mixed<mealCategory>().oneOf(Object.values(mealCategory)).required(),
  name: string().required(),
  foodItems: array().required(),
};

const food = {
  name: string().required(),
  calories: number().optional(),
  protein: number().optional(),
  carbs: number().optional(),
  fat: number().optional(),
  acceptedUnits: array().of(mixed<unitsENum>().oneOf(Object.values(unitsENum)).required()),
  itemWeight: string().required(),
};

export const userSchema = new ObjectSchema(user);
export const mealSchema = new ObjectSchema(meal);
export const foodSchema = new ObjectSchema(food);
