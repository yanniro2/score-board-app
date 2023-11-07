"use client";
import React, { useContext } from "react";
import { RadioContext } from "@/app/context/RadioContext";
const ButtonCheck = () => {
  const { handleClick, hide } = useContext(RadioContext);
  return (
    <div className="w-full h-max bg-black">
      <button onClick={handleClick} className="btn text-black">
        Click me
      </button>
      {hide && <div className="w-full h-[5rem] bg-red-400 rouned">Show me</div>}
    </div>
  );
};

export default ButtonCheck;
