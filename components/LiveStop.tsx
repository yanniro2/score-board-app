"use client";
import React, { ChangeEvent, useState } from "react";
import { BsRecordCircle } from "react-icons/bs";
import { FaRegStopCircle } from "react-icons/fa";

const LiveStop = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);

  const handleLayoutChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedLayout(event.target.value);
  };

  return (
    <div className="w-full h-min flex flex-col justify-evenly bg-gray-900 rounded-xl p-3 text-white text-center ">
      <div className="w-full  flex text-center justify-evenly">
        <div>
          {toggle ? (
            <div>
              <input
                type="radio"
                id="live"
                name="is_live"
                className="hidden"
                value="live"
                onChange={handleLayoutChange}
                checked={selectedLayout === "live"}
              />
              <label htmlFor="live">
                <button
                  onClick={handleToggle}
                  className="btn bg-red-600 flex items-center gap-[1rem]">
                  <BsRecordCircle />
                  Live
                </button>
              </label>
            </div>
          ) : (
            <div>
              <input
                type="radio"
                id="stop"
                name="is_live"
                className="hidden"
                value="stop"
                onChange={handleLayoutChange}
                checked={selectedLayout === "stop"}
              />
              <label htmlFor="stop">
                <button
                  onClick={handleToggle}
                  className="btn text-red-600 flex items-center gap-[1rem] bg-white">
                  <FaRegStopCircle />
                  stop
                </button>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveStop;
