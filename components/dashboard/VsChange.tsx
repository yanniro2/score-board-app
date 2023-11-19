"use client";
import React, { useState, ChangeEvent } from "react";

interface Layout {
  value: string;
  label: string;
  icon: React.ReactNode;
  name: string;
}

interface VsChangeProps {
  layouts: Layout[];
  title: string;
}

const VsChange: React.FC<VsChangeProps> = ({ layouts, title }) => {
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);

  const handleLayoutChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedLayout(event.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col justify-evenly bg-gray-900 rounded-xl p-5 text-white text-center font-roboto ">
      <h2 className="h2-1">{title}</h2>

      <div className="w-full h-full flex text-center justify-evenly">
        {layouts.map((layout, index) => (
          <div
            key={index}
            className={`flex items-center justify-center gap-[1rem] ${
              selectedLayout === layout.value ? "active" : ""
            }`}>
            <input
              type="radio"
              id={layout.value}
              name={layout.name}
              value={layout.value}
              className="hidden"
              onChange={handleLayoutChange}
              checked={selectedLayout === layout.value}
            />
            <label
              htmlFor={layout.value}
              className="flex items-center justify-center text-center cursor-pointer">
              <div
                className={`w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center ${
                  selectedLayout === layout.value
                    ? "bg-orange-600 border-orange-600"
                    : ""
                }`}>
                {selectedLayout === layout.value && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span className="ml-2 flex items-center gap-[1rem]">
                {layout.icon}
                {layout.label}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VsChange;
