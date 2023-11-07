"use client";
import React, { useState } from "react";


const RadioGroup = ({ options, heading }: any) => {
  const [selectedItem, setSelectedItem] = useState(options[0].value);

  const handleRadioChange = (event: any) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col justify-evenly bg-gray-900 rounded-xl p-5 text-white text-center gap-[2rem]">
      <h2 className="h2">{heading}</h2>
      <div className="w-full h-full flex text-center justify-evenly">
        {options.map((option: any) => (
          <div
            key={option.value}
            className={`flex items-center justify-center gap-[1rem] ${
              selectedItem === option.value ? "active" : ""
            }`}>
            <input
              type="radio"
              id={option.value}
              name={heading} // Ensure each radio group has a unique name
              value={option.value}
              checked={selectedItem === option.value}
              onChange={handleRadioChange}
              className="hidden"
            />
            <label
              className="flex items-start justify-center text-center cursor-pointer"
              htmlFor={option.value}>
              <div
                className={`w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center  ${
                  selectedItem === option.value
                    ? "bg-blue-500 border-blue-500"
                    : ""
                }`}>
                {selectedItem === option.value && (
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                )}
              </div>
              <span className="ml-2">
                {option.icon}
                {option.label}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;



