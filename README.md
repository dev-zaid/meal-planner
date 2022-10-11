# Meal Planner

## LEVEL 1

Schema Design Make a new project and setup MongoDB server. Design Mongoose Schema according to the following Food Item (all data per 100g) – name, calories, protein, carb, fat, acceptedUnits (array of enum of ml, liter, kg, g, item, etc), itemWeight (in g) (eg. – average weight of 1 banana is 118g) Meal – category (enum based on time of day - Breakfast, Lunch, Evening Snack, Dinner), name, foodItems (array) User – name, calorieRequirement, mealPlan (array of object having date and Meals reference)

## LEVEL 2

Creating objects in the database using APIs Create POST APIs to add the following in the database. Add any 20 Food Items using POST API from here or any other items as per your liking - https://jtmadhavan.files.wordpress.com/2009/09/the-calorie-chart-of-indian-food.pdf Create any 5 Meals using the meal items by referencing Food Items into the mealItems array. Create a user using dummy data and make a Meal Plan for 2 dates using the 5 meals created by using a POST API to append the meal plan array in the user object. Create PATCH API to update Meals in the DB and Meal Plans for a User.

## LEVEL 3

Optimizing meals for protein. Given the number of calories for a meal, implement an algorithm to select Food Items with the following constraints in the order of priority from highest to lowest. Quantity of items is a whole number (eg – 1 banana and not 0.234 banana). Acceptable quantities are in the multiples of 0.25 (eg – 0.25, 0.5, 1, 1.75, etc) but the logic should prioritize whole numbers.Calories are in the range of ± 100 from the given amount.The amount of protein (1g protein has 4 calories) is 20-30% of the total calories.The number of different items is in the range of 2-5.
