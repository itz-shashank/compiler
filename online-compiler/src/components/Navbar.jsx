import React, { useState } from "react";

const Navbar = ({ theme }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className={`flex justify-between items-center h-40 p-10 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
      }  relative `}
    >
      <div className="text-4xl font-semibold">nextLeap</div>
      <div className="flex gap-6">
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="hover:text-gray-400 text-xl">Courses </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-60  bg-white text-black shadow-lg rounded">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Product Management Fellowship
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Product Designer Fellowship
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Data Analyst Fellowship
              </a>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-gray-400 text-xl">
          NextLeap Reviews
        </a>
        <a href="#" className="hover:text-gray-400 text-xl">
          Hire From Us
        </a>
        <a href="#" className="hover:text-gray-400 text-xl">
          Blog
        </a>
      </div>
      <div>
        <button className="hover:text-gray-400">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
