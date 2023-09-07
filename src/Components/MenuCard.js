import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import MenuItem from './MenuItem'; 
import CartItem from './CartItem'; 
import { saveSelectedMealToLocalStorage, getSelectedMealFromLocalStorage, saveSelectedDrinkToLocalStorage, getSelectedDrinkFromLocalStorage } from './helper';

const MenuCard = ({ selectedLabel, mealList }) => {
  // Filter meals based on the selectedLabel from the TagList component 
  const filteredMeals =
    selectedLabel === 'all'
      ? mealList 
      : mealList.filter((meal) => meal.labels.includes(selectedLabel));

// These are the states and functions for the menu items component
  const [selectedDrinks, setSelectedDrinks] = useState({});
  const [selectedMeals, setSelectedMeals] = useState({});
  const [passenger, setPassenger] = useState(null);
  const [activeButton, setActiveButton] = useState(null); 

  // Pagination -> these are the states and functions for the pagination component 
  const [currentPage, setCurrentPage] = useState(0);  
  const itemsPerPage = 3;
  const pageCount = Math.ceil(filteredMeals.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const mealsToShow = filteredMeals.slice(startIndex, endIndex);

  //this function is also for pagination which will handle the page click and update the currentPage state
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  //this function will handle the meal selection and update the selectedMeals state based on the passenger no.
  const handleSelectMeal = (mealId) => {
    if(passenger !== null){
    setSelectedMeals((prevSelectedMeals) => ({
      ...prevSelectedMeals,
      [passenger]: prevSelectedMeals[passenger] === mealId ? null : mealId,
    }));
  }
  };

  //this function will handle the meal removal and update the selectedMeals and selectedDrinks(if any) state based on the passenger no.
   const handleRemoveMeal = (passengerNumber) => {
    setSelectedMeals((prevSelectedMeals) => ({
      ...prevSelectedMeals,
      [passengerNumber]: null, 
    }));
    setSelectedDrinks((prevSelectedDrinks) => ({
      ...prevSelectedDrinks,
      [passengerNumber]: null, 
    }));
  };

  //this function will handle the passenger selection and update the passenger and activeButton state 
  const handleSelectPassenger = (passengerNumber) => {
    setPassenger(passengerNumber);
    setActiveButton(passengerNumber);
  };

  //this function will handle the drink selection if user select any with meal and update the selectedDrinks on the basis of passenger no.
  const handleSelectDrink = (mealId, drinkTitle, drinkPrice) => {
    setSelectedDrinks((prevSelectedDrinks) => {
    const passengerDrink = prevSelectedDrinks[passenger];
    const meal = mealList.find((m) => m.id === mealId);
    if (!passengerDrink || passengerDrink.mealId !== mealId || passengerDrink.drinkTitle !== drinkTitle) {
      return {
        ...prevSelectedDrinks,
        [passenger]: { mealId, drinkTitle, drinkPrice },
      };
    } else {
      return {
        ...prevSelectedDrinks,
        [passenger]: null,
      };
    }
  });
  };

  //this function will calculate the subtotal of the selected meal and drink for each passenger and return the total amount of them
  const calculateSubtotal = (passengerNumber) => {
    const mealId = selectedMeals[passengerNumber];
    const meal = mealList.find((m) => m.id === mealId);
    const drink = selectedDrinks[passengerNumber];
    let subtotal = 0;
    if (meal) {
      subtotal += meal.price;
    }
    if (drink) {
      subtotal += drink.drinkPrice;
    }
    return subtotal;
  };

  //this function will calculate the grandtotal of the selected meal and drink for all the passengers and return the total amount
  const calculateGrandTotal = () => {
    let grandTotal = 0;
    for (let passengerNumber = 1; passengerNumber <= 2; passengerNumber++) {
      grandTotal += calculateSubtotal(passengerNumber);
    }
    return grandTotal;
  };

  //the purpose of this effect is to load the selected meals and drinks from localStorage, if any, when the page loads
  useEffect(() => {
    for (let passengerNumber = 1; passengerNumber <= 2; passengerNumber++) {
      const storedMealId = getSelectedMealFromLocalStorage(passengerNumber);
      if (storedMealId) {
        setSelectedMeals((prevSelectedMeals) => ({
          ...prevSelectedMeals,
          [passengerNumber]: storedMealId,
        }));
      }
      const drinkData = getSelectedDrinkFromLocalStorage(passengerNumber, storedMealId);
      if (drinkData) {
        setSelectedDrinks((prevSelectedDrinks) => ({
          ...prevSelectedDrinks,
          [passengerNumber]: drinkData,
        }));
      }
    }
  }, []); 

  //this is because we want to persist the data even after the page refreshes, so it will update selected meals and drinks in localStorage whenever they change , 
  useEffect(() => {
    for (let passengerNumber = 1; passengerNumber <= 2; passengerNumber++) {
      const mealId = selectedMeals[passengerNumber];
      const drinkData = selectedDrinks[passengerNumber];
      if (mealId) {
        saveSelectedMealToLocalStorage(passengerNumber, mealId);
      } else {
        localStorage.removeItem(`selectedMeal_${passengerNumber}`);
      }
      if (drinkData) {
        saveSelectedDrinkToLocalStorage(passengerNumber, mealId, drinkData.drinkTitle, drinkData.drinkPrice);
      } else {
        localStorage.removeItem(`selectedDrink_${passengerNumber}_${mealId}`);
      }
    }
  }, [selectedMeals, selectedDrinks]);
  

  return (
    <div className="flex flex-col lg:flex-row space-y-4 md:gap-8 md:space-x-4 md:justify-center ">
      {/* menu items */}
      <div
        className="md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg mt-8 md:mx-auto lg:mx-0"
        style={{
          background:
            'linear-gradient(to right top, #8abdf3, #8abdf3, #aac6f2, #c3d0f1, #d8dcef)',
        }}
      >
        {mealsToShow.map((meal) => (
          <MenuItem
            key={meal?.id}
            meal={meal}
            selectedMeals={selectedMeals}
            selectedDrinks={selectedDrinks}
            handleSelectDrink={handleSelectDrink}
            handleSelectMeal={handleSelectMeal}
          />
        ))}
        {/* Pagination */}
        <div className="flex mt-4">
          <ReactPaginate
            className="flex gap-10 mb-4 font-semibold items-center mx-auto "
            pageCount={pageCount}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            previousLabel={'<<'}
            nextLabel={'>>'}
            breakLabel={'...'}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'bg-blue-500 text-white px-4 py-2 rounded-lg'}
          />
        </div>
      </div>

      {/* cart side */}
      <div className="lg:mr-8 lg:w-auto md:w-3/4 mx-4 ">
        <div className="mt-8">
          <p className="text-2xl font-bold">Select Meal</p>
          <CartItem
            passengerNumber={passenger}
            meal={mealList.find((m) => m.id === selectedMeals[1])}
            selectedMeals={selectedMeals}
            selectedDrinks={selectedDrinks}
            calculateSubtotal={calculateSubtotal}
            activeButton={activeButton}
            handleSelectPassenger={handleSelectPassenger}
            handleRemoveMeal={handleRemoveMeal}
            mealList={mealList}
          />
          <div className="flex gap-10 mt-4 font-semibold">
            <p>Total for all Passengers</p>
            <p>
              Grandtotal :{' '}
              {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'EUR',
              }).format(calculateGrandTotal())}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
