"use client";
import React, { useState } from "react";

const RadioGroup = ({ options }: any) => {
  const [selectedItem, setSelectedItem] = useState(options[0].value);

  const handleRadioChange = (event: any) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col  justify-evenly   bg-gray-900 rounded-xl p-5 text-white text-center">
      <h2 className="h2">Ads</h2>
      <div className="w-full h-full flex text-center justify-evenly">
        {options.map((option: any) => (
          <div
            key={option.value}
            className="flex items-center justify-center gap-[1rem]">
            <input
              type="radio"
              id={option.value}
              name="item"
              value={option.value}
              checked={selectedItem === option.value}
              onChange={handleRadioChange}
            />
            <label
              className="flex flex-col items-start justify-center text-center"
              htmlFor={option.value}>
              {option.icon}
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
