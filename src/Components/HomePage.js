import FoodDine from "../Assets/Food-dine.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:mx-36 lg:mt-8 sm:mb-28">
      {/* Content */}
      <div className="w-full  sm:w-1/2 lg:w-5/6  p-4">
        <p className=" mt-4 lg:mt-0 text-3xl  md:text-4xl lg:text-5xl font-bold text-center sm:text-left">
          Taste the skies with, <br />
          <span className="text-blue-700 text-5xl md:text-6xl">AeroCuisine </span> Delights !!
        </p>
        <p className="text-sm sm:text-base lg:text-lg mt-2 md:mt-4 text-center sm:text-left ">
          Embark on a culinary journey at 30,000 feet with AeroCuisine, your
          in-flight dining destination. We're here to elevate your travel
          experience by offering a delightful array of delectable dishes and
          refreshing drinks tailored to your family's tastes. Navigate through
          our user-friendly website to explore our menu and plan your culinary
          voyage before takeoff.
        </p>
      <div className="text-center sm:text-left md:mt-6 ">
        <Link to="/meals">
          <button className="flex items-center font-medium rounded-lg text-sm sm:text-base px-4 py-1 bg-blue-500 hover:bg-blue-600 mx-auto md:mx-0 mt-8 md:mt-0">
            Order Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                id="right-arrow"
                width="38"
                height="38"
              >
                <path
                  d="M22.94,16.31a1,1,0,0,0,0-.25V16a.85.85,0,0,0-.06-.31,0,0,0,0,0,0,0h0a.85.85,0,0,0-.19-.3l0,0-5-5a1,1,0,0,0-1.42,1.42L19.59,15H10a1,1,0,0,0,0,2h9.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.19-.30A.30.30,0,0,0,22.94,16.31Z"
                  data-name="right arrow"
                ></path>
              </svg>
            </button>
        </Link>
        </div>
      </div>
      {/*Dine-Image */}
      <div className="lg:w-4/6 xl:w-11/12">
        <img src={FoodDine} alt="Food-dine" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default HomePage;
