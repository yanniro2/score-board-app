"use client";
import { useEffect, useState } from "react";

const ScoreDashboard = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  let myWindow: Window | null = null; // Declare myWindow variable with Window type and null initialization
  const openFullScreenWindow = () => {
    if (window) {
      const width = window.screen.width;
      const height = window.screen.height;
      const features =
        "width=" +
        width +
        ",height=" +
        height +
        ",fullscreen=yes,menubar=no,toolbar=no,location=no,personalbar=no,status=no,scrollbars=no,resizable=no";
      var myWindow = window.open("/", "_blank", features);
      if (myWindow) {
        setIsWindowOpen(true);
      }
    }
  };

  useEffect(() => {
    if (window) {
      // Your code that involves the window object
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isWindowOpen && myWindow && myWindow.closed) {
        setIsWindowOpen(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isWindowOpen, openFullScreenWindow]);

  return (
    <div className="w-1/2 h-max mx-auto bg-gray-900 rounded-xl p-5 text-white text-center flex flex-col justify-between gap-[2rem]">
      <div className="flex items-center gap-[1rem] justify-center">
        {isWindowOpen ? (
          <button className="btn bg-blue-400 capitalize ">Pause</button>
        ) : (
          <button
            className="btn bg-blue-400 capitalize "
            onClick={openFullScreenWindow}>
            Live
          </button>
        )}

        {isWindowOpen && (
          <button
            className="btn bg-red-400"
            onClick={() => setIsWindowOpen(false)}>
            Stop
          </button>
        )}

        <button className="btn bg-green-400 ">Save</button>
      </div>

      <div>
        <input
          type="number"
          name="duration"
          id="duration"
          placeholder="duration"
          className="p-3 rounded-xl capitalize text-black text-center"
        />
      </div>
      <h1 className="h2">Match Details</h1>
      <div className="w-full flex items-center flex-col justify-between mx-auto ">
        <div className="flex items-center justify-evenly p-3 w-full">
          <h2 className="h2">team A total</h2>
          <h2 className="uppercase font-poppins font-medium tracking-wider flex items-center justify-center gap-3 p-3 px-[2rem] rounded-full underline text-gray-500 ">
            vs Changes
          </h2>

          <h2 className="h2">team B total</h2>
        </div>

        <div className="box-1 bg-gray-800 p-3 w-full">
          <input
            type="number"
            name="duration"
            id="duration"
            placeholder="try team a"
            className="p-3 rounded-xl capitalize text-black text-center"
          />
          <h2 className="capitalize font-roboto font-normal tracking-wider flex items-center justify-center text-gray-500">
            try
          </h2>

          <input
            type="number"
            name="duration"
            id="duration"
            placeholder="try team b"
            className="p-3 rounded-xl capitalize text-black text-center"
          />
        </div>

        <div className="box-1 p-3 w-full">
          <input
            type="number"
            name="duration"
            id="duration"
            placeholder=" conversion team a"
            className="p-3 rounded-xl capitalize text-black text-center"
          />
          <h2 className="capitalize font-roboto font-normal tracking-wider flex items-center justify-center text-gray-500">
            conversion
          </h2>

          <input
            type="number"
            name="duration"
            id="duration"
            placeholder="conversion team b"
            className="p-3 rounded-xl capitalize text-black text-center"
          />
        </div>

        <div className="box-1 p-3">
          <input
            type="number"
            name="duration"
            id="duration"
            placeholder="penalty team a"
            className="p-3 rounded-xl capitalize text-black text-center"
          />
          <h2 className="capitalize font-roboto font-normal tracking-wider flex items-center justify-center text-gray-500">
            penalty
          </h2>

          <input
            type="number"
            name="duration"
            id="duration"
            placeholder="penalty team b"
            className="p-3 rounded-xl capitalize text-black text-center"
          />
        </div>

        <div className="box-1 bg-gray-800 p-3">
          <input
            type="number"
            name="duration"
            id="duration"
            placeholder="drop goals team a"
            className="p-3 rounded-xl capitalize text-black text-center"
          />
          <h2 className="capitalize font-roboto font-normal tracking-wider flex items-center justify-center text-gray-500">
            drop goals
          </h2>

          <input
            type="number"
            name="duration"
            id="duration"
            placeholder="drop goals team b"
            className="p-3 rounded-xl capitalize text-black text-center"
          />
        </div>
        <div className="flex items-center justify-center p-3">
          <input
            type="number"
            name="duration"
            id="duration"
            placeholder="extra time duration"
            className="p-3 rounded-xl capitalize text-black text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ScoreDashboard;
