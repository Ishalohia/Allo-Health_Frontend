# Live Project Link 

Click here to check the hosted website - [Hosted Link](https://allo-health-frontend-ishalohia.vercel.app/)

## Features Asked
### Show a list of meals with basic meal information, an image and the option to select a drink with a meal (drink selection is optional).

The basic meal information was provided in Dataset.json file, First i have imported whole meal info as mealData in MealPage.js. Then pass {mealData.meals} value in the mealList prop to MenuCard for display a list of meal items.

In MenuCard.js , this component receives two props: selectedLabel (to filter the meals based on a label) and mealList (to display the list of meals).

Then I created one variable to filter the meals based on the tagList label using the selectedLabel, If "all" is selected, all meals are displayed; otherwise, only meals with the selected label are shown.

To enhance the user experience and manage the list of meals, I implement "Pagination" which means that not all meals are presented on a single page. Instead, they are divided into pages, with a specified number of meals (configured with the "itemsPerPage" variable) displayed per page. This will ensure user-friendly and manageable interface. 

Then I map throw "mealsToShow" which contains the meals to be displayed on the current page, this mapping operation essentially renders each meal using the "MenuItem.js" component.
The component is displaying a list of meals with basic meal information and also responsible for rendering the meal details, including the meal's name, description, and image with associated drinks.

In MenuItem.js, this component fulfills the requirement of showing a list of meals with basic information and the option to choose a drink if desired. If they choose to do so, the selected drink is displayed, and they can toggle their drink selection. This menuItem component also receiving many props to fulfill desired requirements like, 

A- "meal" object as a prop, which contains information about the meal, such as its title, starter, dessert, and image.

B- "selectedDrinks" prop that associates drinks with specific meals based on their IDs.

C- The "handleSelectDrink" function which takes the meal's ID, the drink's title, and its price as arguments and allows users to choose a drink to accompany their meal bu just clicking.

D- "handleSelectMeal" function which records the selected meal by allowing users to choose that meal.

### Show a list of tags and filter meals based on the selected tag. In the dataset provided meals already have tags associated with them.


