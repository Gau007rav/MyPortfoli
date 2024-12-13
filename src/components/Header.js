import React from "react";
import "remixicon/fonts/remixicon.css";

function Header() {
  return (
    <div className="fixed flex justify-between items-center w-full z-10 p-4 md:p-8 bg-transparent">
      {/* Button */}
      <button className="bubble-effect relative bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 rounded-full font-bold overflow-hidden shadow-md transition-transform transform hover:scale-105">
        Hire Me
      </button>

      {/* Icon */}
      <i className="ri-function-line text-blue-500 text-2xl md:text-3xl font-bold cursor-pointer transition-transform transform hover:scale-110"></i>
    </div>
  );
}

export default Header;
