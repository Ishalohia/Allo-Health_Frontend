import { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../Assets/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import dropdown from "../Assets/dropdown.svg"

const Navbar = () => {

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  
  //this toggle button will show user info when user click it after login
   const handleUserDropdownToggle = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  return (
    <div className="flex md:justify-between w-auto px-20 full z-20 top-0 left-0 self-baseline sticky backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-blue-200">
      {/* LOGO */}
      <div>
      <Link to="/">
        <img src={logo} alt="logo" className="hidden sm:block md:w-20 md:h-20 mt-4 sm:mt-2 sm:pb-2"/>
        </Link>
        <Link to="/">
        <p className="sm:hidden mt-8 -ml-16 text-xl font-serif font-extrabold">AeroCuisine</p>
        </Link>
      </div>
      {/* PAGES */}
      <div>
        <ul className="flex gap-10 md:mt-10 mt-8 ml-2 sm:ml-0">
            <Link to="/">
                <li className="hidden sm:block font-semibold text-lg hover:text-amber-800"> Home </li>
            </Link>
             <Link  to="/meals">
                <li className="font-semibold text-lg hover:text-amber-800 "> Meals </li>
            </Link>
        </ul>
      </div>
      {/* Authentication */}
      <div className="mt-8 ml-16 sm:ml-0  pb-4 sm:pb-0 ">
      {isAuthenticated && showUserDropdown && (
                <div className="hidden sm:block absolute mt-12 w-40 bg-white rounded-lg shadow-lg">
                  <div className="py-1">
                    <div className="px-4 py-1 text-gray-800 flex justify-around items-center gap-2">
                       <img
                          className="h-10 w-10 rounded-full"
                          src={user.picture}
                          alt={user.name}
                        />
                      <span>{user.name}</span>
                    </div>
                    </div>
                  </div>
              )}
            {isAuthenticated ? (
          
            <div className=" w-auto flex font-medium rounded-lg text-xs sm:text-sm px-4 py-1 md:py-2 text-center  text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
            <img src={dropdown} alt="dropdown" width={20} height={20} onClick={handleUserDropdownToggle}
              className="hidden sm:block self-center ml-2"
            />
            </div>
        
          ) : (
            <button
              className="w-auto font-medium rounded-lg text-xs sm:text-sm px-4 py-1 md:py-2 text-center text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}
      </div>
    </div>
  )
}

export default Navbar
