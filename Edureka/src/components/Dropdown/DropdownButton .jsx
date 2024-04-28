import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const DropdownButton = ({ icon, options, text }) => {
  // State to manage the dropdown's open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown open/close state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Button to toggle the dropdown */}
      <button
        className="px-4 py-2 focus:outline-none flex items-center hover:bg-headerblue w-full"
        onClick={toggleDropdown}
      >
        {/* Render icon if provided */}
        {icon && <span className="mr-2">{icon}</span>}
        <div className="flex items-center justify-between w-full">
          {/* Text for the button */}
          <span>{text}</span>
          {/* Render dropdown icon based on open/close state */}
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full z-40 bg-white border border-gray-200 shadow-md mt-1">
          {/* Render options */}
          {options.map((option, index) => (
            <div key={index} className="flex items-center py-2 px-4 hover:bg-headerblue">
              {/* Render option icon if provided */}
              {option.icon && <span className="mr-2">{option.icon}</span>}
              {/* Option text */}
              <span>{option.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
