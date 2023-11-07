"use client";
import React, { useState } from "react";
import { BiGrid, BiFullscreen, BiLayout } from "react-icons/bi";
import { LuPanelBottom } from "react-icons/lu";

const RadioGroup = () => {
  const [selectedItem, setSelectedItem] = useState("item1");

  const handleRadioChange = (event: any) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col  justify-evenly   bg-gray-900 rounded-xl p-5 text-white text-center">
      <h2 className="h2">Ads</h2>
      <div className=" w-full h-full flex text-center justify-evenly">
        <div className="flex items-center justify-center gap-[1rem]">
          <input
            type="radio"
            id="item1"
            name="item"
            value="item1"
            checked={selectedItem === "item1"}
            onChange={handleRadioChange}
          />
          <label
            className="flex flex-col items-start justify-center text-center"
            htmlFor="item1">
            <BiGrid /> Default
          </label>
        </div>
        <div className="flex items-center justify-center gap-[1rem]">
          <input
            type="radio"
            id="item2"
            name="item"
            value="item2"
            checked={selectedItem === "item2"}
            onChange={handleRadioChange}
          />
          <label
            htmlFor="item2"
            className="flex flex-col items-start justify-center text-center">
            <LuPanelBottom /> Bottom
          </label>
        </div>
        <div className="flex items-center justify-center gap-[1rem]">
          <input
            type="radio"
            id="item3"
            name="item"
            value="item3"
            checked={selectedItem === "item3"}
            onChange={handleRadioChange}
          />
          <label
            className="flex flex-col items-start justify-center text-center"
            htmlFor="item3">
            <BiFullscreen /> Full Screen
          </label>
        </div>
        <div className="flex items-center justify-center gap-[1rem]">
          <input
            type="radio"
            id="item4"
            name="item"
            value="item4"
            checked={selectedItem === "item4"}
            onChange={handleRadioChange}
          />
          <label
            className="flex flex-col items-start justify-center text-center"
            htmlFor="item4">
            <BiLayout /> 3/4 Screen
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioGroup;
