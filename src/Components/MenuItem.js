//This component is just a child component of MenuCard.js and it will display the meal items based 
// on the currently selected label & the mealData loaded as mealList from 'Dataset.json' and
//also it will handle meal selection and then display the selected meal and drink(if any) both info. in the 
// CartItem.js component

import React from 'react';

const MenuItem = ({ meal, selectedDrinks, handleSelectDrink, handleSelectMeal }) => {

  return (
    <div className="py-2 flex flex-col md:flex-row duration-300 px-3 border-b border-gray-300">
      <div className='flex flex-col md:flex-row w-full md:justify-between mt-1'>
        <img
          className="w-full pr-24 md:pr-0 md:w-52 lg:w-60 h-36 md:h-36 rounded-lg object-fit"
          src={meal?.img}
          alt={meal?.title}
        />
        <div className="flex flex-col md:ml-4 ">
          <h3 className="text-lg md:text-xl font-bold">{meal?.title}</h3>
          <p className="mt-1 text-sm md:text-base text-gray-800 font-semibold">
            Starter: {meal?.starter}
          </p>
          <p className="mt-1 text-sm md:text-base text-gray-700 font-semibold">
            Dessert: {meal?.desert}
          </p>
          <p className="mt-1 text-sm md:text-base text-gray-700 font-semibold">
            Selected Drink: {selectedDrinks[meal?.id] || 'None'}
          </p>
          <div className="flex gap-2 mt-2">
            {meal.drinks?.map((drink) => {
              return (
                <div key={drink?.id}>
                  <img
                    src={drink?.img}
                    alt={drink?.title}
                    className="w-10 h-10 md:w-16 md:h-16 rounded-lg hover:border-blue-800 hover:border-2"
                    onClick={() => handleSelectDrink(meal?.id, drink?.title, drink?.price)}
                  />
                  <p className="mb-2 ml-2 text-xs md:text-sm text-gray-900 font-semibold">
                    {drink?.price > 0
                      ? new Intl.NumberFormat('en-IN', {
                          style: 'currency',
                          currency: 'EUR',
                        }).format(drink?.price)
                      : ' '}
                  </p>
                </div>
              );
            })}
            <div className="ml-4 mb-2 md:ml-8 md:mt-0">
              <p className="mb-2 text-xs md:text-sm text-gray-900 font-semibold">
                {meal?.price > 0
                  ? new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'EUR',
                    }).format(meal?.price)
                  : ' '}
              </p>
              <button
                className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-700 md:mr-2 "
                onClick={() => handleSelectMeal(meal?.id) }
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
