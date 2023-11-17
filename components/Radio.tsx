"use client";
import React, { useState, ChangeEvent } from "react";

interface LayoutSelectorProps {}

const LayoutSelector: React.FC<LayoutSelectorProps> = () => {
  const layouts = ["Layout 1", "Layout 2", "Layout 3", "Layout 4"];
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);

  const handleLayoutChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedLayout(event.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col justify-evenly bg-gray-900 rounded-xl p-5 text-white text-center gap-[2rem] 2xl:text-[3rem]">
      <h2 className="h2">Layout</h2>

      <div className="w-full h-full flex text-center justify-evenly">
        {layouts.map((layout, index) => (
          <div
            key={index}
            className={`flex items-center justify-center gap-[1rem] ${
              selectedLayout === `layout${index + 1}` ? "active" : ""
            }`}>
            <input
              type="radio"
              id={`layout${index + 1}`}
              name="layout"
              value={`layout${index + 1}`}
              className="hidden"
              onChange={handleLayoutChange}
              checked={selectedLayout === `layout${index + 1}`}
            />
            <label
              htmlFor={`layout${index + 1}`}
              className="flex items-center justify-center text-center cursor-pointer">
              <div
                className={`w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center ${
                  selectedLayout === `layout${index + 1}`
                    ? "bg-blue-500 border-blue-500"
                    : ""
                }`}>
                {selectedLayout === `layout${index + 1}` && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span className="ml-2">{layout}</span>
            </label>
          </div>
        ))}
      </div>
      <p>Selected Layout: {selectedLayout}</p>
    </div>
  );
};

export default LayoutSelector;
