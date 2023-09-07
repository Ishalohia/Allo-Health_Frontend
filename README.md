# Live Project Link 

Click here to check the hosted website - [Hosted Link](https://allo-health-frontend-ishalohia.vercel.app/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Features Asked
### Q- Show a list of meals with basic meal information, an image and the option to select a drink with a meal (drink selection is optional).

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

### Q- Show a list of tags and filter meals based on the selected tag. In the dataset provided meals already have tags associated with them.

I have created a separate component for displaying a tagList, then import the component in MealPage.js where  onLabelSelect prop is passed with the handleLabelSelect function, which handles label selection and updates the selectedLabel state. 

The Taglist component maps through the {labelsData.labels} array, which contains the list of tags from the 'Dataset.json' file.

The useState hook is used to manage the state of the currently selected label. Initially, it sets selectedLabel to 'all'.

When any tag is clicked, it trigger "handleLabelClick" function which sets the 'selectedLabel' state to the ID of the clicked label. Additionally, it invokes the onLabelSelect prop, passing the selected label's ID as an argument to parent( i.e. MealPage) to handle the label selection and filter meals accordingly.

### Q- Show a list of at least 2 people. Meal selection is associated with the currently selected person. There should be an option to deselect a meal.

 The "CartItem" component is responsible for managing individual passenger meal selections and displaying meal details for each passenger. Several props are used to implement this functionality 

 A- "selectedMeals" prop is used to keeps track of the selected meal for each passenger. It is used to determine whether a passenger has selected a meal, and if so, it retrieves the selected meal's information for display.

B- "selectedDrinks" prop is used to display the selected drink's information associated with a meal and passenger, if selected.

C- "calculateSubtotal" prop is a function responsible for calculating the subtotal cost for a specific passenger based on their selected meal and drink (if any).

D- "activebutton" prop indicates the currently active passenger whose meal selection is being managed and used to style the UI to highlight the active passenger

E- "handleSelectPassenger" prop is a function that handles the selection of a passenger, it is called when a user clicks on the "Add Passenger" button to select a passenger and sets the active passenger.

F- "handleRemoveMea" prop is a function responsible for removing a selected meal (and associated drink) for a passenger which is called when a user clicks on the "Remove" button.

G- "mealList" is used to retrieve meal details based on the meal IDs stored in selectedMeals and to display available meal options to users.

Now, Each passenger can select a meal from the list of displayed meals in the menuList. The selection is associated with the currently active passenger, Passengers are represented by Passenger 1 and Passenger 2, thus component ensures that each passenger's selected meal is tracked independently. Passengers have the remove button option to deselect their chosen meal.


### Q- Show a total price of all currently selected meals and drinks.

To implement the display of the total price of selected meals and drinks for each Passenge by using function named "subTotal" , then total price for both passenger meal by a function named "calculateGrandTotal",

"subTotal" function retrieves the selected "mealID" for the passenger from the "selectedMeals" state then fetches the selected drink information (if any) for the same passenger from the "selectedDrinks" state, thus the meal and drink data are obtained from the mealList based on the mealID. Then the subtotal is calculated by adding the price of the selected meal and the price of the selected drink (if selected) together.

"calculateGrandTotal" function calculates the grand total by summing up the subtotals for all passengers. It iterate through both passengers and calls the subTotal function for each passenger. Once all passengers are processed, subtotal for each passenger is accumulated in the "grandTotal" variable


##Bonus Features 

### 1- Responsive interface

A responsive interface is a design approach that ensures a website or application can automatically adjust its layout, content, and functionality to provide an optimal viewing and interaction experience across a wide range of devices and screen sizes.

I used "Tailwind-CSS", Tailwind CSS is a utility-first CSS framework, it provides a set of utility classes that we can apply directly to HTML elements for styling purpose.

To apply styles conditionally based on screen size breakpoints in tailwind-css, we use ->  sm: for small screens, md: for medium screens, lg: for large screens.

Thus this project has resulted in a responsive interface for all screen sizes which efficiently developed user interface that enhances the overall user experience. 

### 2- Authentication

I've implemented authentication using the "Auth0" authentication library to enable user login and logout functionality.

To use Auth0, firstly, we would configure it with our Auth0 application settings by creating a new application , choose type of application, give name, including specifying allowed callback URLs and logout URLs.

After creating the Auth0 application, we will be provided with a Client ID and Client Secret

We're using the useAuth0 hook to access authentication-related functions and state variables, 

In this Navbar component, it effectively integrates Auth0 authentication by providing login and logout functionality, along with conditional rendering of user-related UI elements based on the user's authentication status. The user dropdown provides a access to user information and initiate logout. 

### 3- Pagination

I've implemented pagination in MenuCard component using the "ReactPaginate' library. Pagination implementation involves tracking of current page, calculating the number of pages and which items to display on each page.

I managed pagination with several states in my component. These include currentPage, itemsPerPage, pageCount, startIndex, endIndex, and mealsToShow. These states help determine which items to display on the current page. 

I did display different sets of meals on each page based on the current "currentPage" and the sliced "mealsToShow" which ensures that only a limited number of meals are shown per page, and users can navigate through them using the pagination controls.

The implementation is responsive, and the number of items per page and the number of displayed pages adjusts dynamically based on the screen size, I also apply CSS classes and styling to the ReactPaginate component to make it visually appealing.

### 4- Hosting it on public cloud

I chose to host my application on Vercel, a popular cloud hosting platform for web applications. The reason behind choosing this platfrom is that Vercel is easy to use and the deployment process is straightforward, and it's incredibly fast to get your application up and running. It allowed me to focus on delivering a great user experience.

The link for my project is :- [clickk here !!](https://allo-health-frontend-ishalohia.vercel.app/)



In conclusion, this project represents a culmination of efforts to create a user-friendly website that meets various feature requirements while also incorporating some bonus features to enhance the overall user experience. From displaying a list of meals and drinks with interactive selection options to implementing a tag-based filtering system.  Furthermore, the addition of features like responsive design for various screen sizes, user authentication, and efficient pagination. 










