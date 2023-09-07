// This component is also a child component of MenuCard.js which is taking many props from MenuCard.js component 
// and it will display the meal items info based on currently  associated passenger and also it will handle 
// the meal removal and display the subtotal of the selected meal and drink(if any) for each passenger


import React from 'react';

const CartItem = ({selectedMeals, selectedDrinks, calculateSubtotal, activeButton, handleSelectPassenger, mealList, handleRemoveMeal}) => {
    
    const passengerHasMeal = (passengerNumber) => selectedMeals[passengerNumber];

  return (
    <div className="flex flex-col px-4 md:px-0 rounded-lg border border-blue-400 bg-gradient-to-r from-blue-200 to-blue-100 md:w-full">
      {/* Passenger 1 */}
      <div className={`flex flex-col sm:flex-row border-b border-black  ${activeButton === 1 ? 'bg-blue-400 ' : ''}`}
         onClick={() => handleSelectPassenger(1)}>
        <button className="text-md font-semibold md:mr-4 p-4">Add Passenger 1</button>
       {passengerHasMeal(1) ? (
          <div className="md:flex md:flex-row py-4 ">
          <div className="">
            <p className="text-sm font-semibold">
              Selected Meal: {mealList.find((m) => m.id === selectedMeals[1])?.title}
            </p>
            {(selectedMeals[1] && selectedDrinks[1]) && (
              <div>
                <p className="text-sm font-semibold">
                  Selected Drink: {selectedDrinks[1] ? selectedDrinks[1].drinkTitle : 'None'}
                </p>
              </div>
            )}
            <p className="text-md font-semibold">
              Subtotal: {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'EUR',
              }).format(calculateSubtotal(1))}
            </p>
            </div>
            <button
              className="text-md font-semibold md:ml-8 pr-4 "
              onClick={() => handleRemoveMeal(1)}
            >
              Remove
            </button>
          </div>
        ) : (
          <button
            className="text-md font-semibold md:mr-4"
            onClick={() => handleSelectPassenger(1)}
          >
            Select Meal
          </button>
        )}
      </div>
      {/* Passenger 2 */}
      <div
        className={`py-3 flex flex-col md:flex-row ${
          activeButton === 2 ? 'bg-blue-400' : ''
        }`}
        onClick={() => handleSelectPassenger(2)}
      >
        <button className="text-md font-semibold md:mr-4 px-4">
          Add Passenger 2
        </button>
        {passengerHasMeal(2) ? (
          <div className="md:flex md:flex-row item-baseline ">
          <div>
            <p className="text-sm font-semibold">
              Selected Meal: {mealList.find((m) => m.id === selectedMeals[2])?.title}
            </p>
            {(selectedMeals[2] && selectedDrinks[2]) && (
              <div>
                <p className="text-sm font-semibold">
                  Selected Drink: {selectedDrinks[2] ? selectedDrinks[2].drinkTitle : 'None'}
                </p>
              </div>
            )}
            <p className="text-md font-semibold">
              Subtotal: {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'EUR',
              }).format(calculateSubtotal(2))}
            </p>
            </div>
            <button
              className="text-md font-semibold md:ml-8 pr-4 "
              onClick={() => handleRemoveMeal(2)} 
            >
              Remove
            </button>
          </div>
        ) : (
          <button
           className="text-md font-semibold md:mr-4"
            onClick={() => handleSelectPassenger(2)}
          >
            Select Meal
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
