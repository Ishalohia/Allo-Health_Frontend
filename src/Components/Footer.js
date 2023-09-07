import React from 'react'
import logo2 from "../Assets/logo2.png"

const Footer = () => {
  return (
    <div className="flex items-center justify-center mt-12 bg-blue-300 p-3 inset-x-0 bottom-0 w-auto ">
      <p className="text-xs md:text-lg font-semibold ">Thankyou for choosing meals by</p>
      <img src={logo2} alt="logo"
        className=" h-4 md:h-8 ml-4"
      />
    </div>
  )
}

export default Footer
