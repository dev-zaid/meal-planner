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

const food = {
  name: string().required('Food name is required'),
  calories: number().optional(),
  protein: number().optional(),
  carbs: number().optional(),
  fat: number().optional(),
  acceptedUnits: array().of(mixed<unitsENum>().oneOf(Object.values(unitsENum)).required('Units is missing')),
  itemWeight: string().required('Item weight/quantity is required'),
};

const meal = {
  category: mixed<mealCategory>().oneOf(Object.values(mealCategory)).required('Category of meal is required'),
  name: string().required('Name of meal is mandatory'),
  foodItems: array().of(string().required('Food items is missing')).required(), //Array of ID of food item
};

const user = {
  name: string().required('Name is mandatory'),
  calorieRequirement: string().required('Calorie requirement is mandatory'),
  mealPlan: array()
    .of(
      object().shape({
        date: date().required('Date is required'),
        mealsReference: array().of(string().required('Meal ID is required')).required('Meals reference is required'),
      }),
    ) //mealsReference refernces to the ID of the meal in the meal collection
    .required('Meal plan is mandatory'),
};

export const userSchema = new ObjectSchema(user);
export const mealSchema = new ObjectSchema(meal);
export const foodSchema = new ObjectSchema(food);

export type User = InferType<typeof userSchema>;
export type Meal = InferType<typeof mealSchema>;
export type Food = InferType<typeof foodSchema>;
