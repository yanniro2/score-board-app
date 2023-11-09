// "use client";
import React, { useEffect, useState } from "react";
import Popup from "../components/Popup";
import { createPortal } from "react-dom";
import {
  BsRecordCircle,
  BsSave2Fill,
  BsFillPauseCircleFill,
  BsFillStopFill,
} from "react-icons/bs";

import { GrUpdate } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import { revalidateTag } from "next/cache";

export interface Match {
  id?: number;
  teamA: string;
  teamB: string;
  duration: string;
}

export default async function ScoreDashboard() {
  // const [isWindowOpen, setIsWindowOpen] = useState(false);
  // let myWindow: Window | null = null; // Declare myWindow variable with Window type and null initialization

  // const openFullScreenWindow = () => {
  //   if (window) {
  //     const width = window.screen.width;
  //     const height = window.screen.height;
  //     const features =
  //       "width=" +
  //       width +
  //       ",height=" +
  //       height +
  //       ",fullscreen=yes,menubar=no,toolbar=no,location=no,personalbar=no,status=no,scrollbars=no,resizable=no";
  //     let myWindow = window.open("/", "_blank", features);
  //     if (myWindow) {
  //       const container = myWindow.document.createElement("div");
  //       myWindow.document.body.appendChild(container);
  //       createPortal(<Popup />, container);
  //       setIsWindowOpen(true);
  //     }
  //   }
  // };

  const res = await fetch(
    "https://654c523b77200d6ba858ba96.mockapi.io/api/v1/match",
    {
      cache: "no-cache",
      next: {
        tags: ["match"],
      },
    }
  );

  const matchs: Match[] = await res.json();

  const addMatchToDatabase = async (e: FormData) => {
    "use server";
    const teamA = e.get("teamA")?.toString();
    const teamB = e.get("teamB")?.toString();
    const duration = e.get("duration")?.toString();

    if (!teamA || !teamB || !duration) return;

    const newMatch: Match = {
      teamA,
      teamB,
      duration,
    };

    await fetch("https://654c523b77200d6ba858ba96.mockapi.io/api/v1/match", {
      method: "POST",
      body: JSON.stringify(newMatch),
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidateTag("match");
  };
  return (
    <div className="w-1/2 h-max mx-auto bg-gray-900 rounded-xl p-5 text-white text-center flex flex-col justify-between gap-[2rem]">
      {/* <div className="flex items-center gap-[1rem] justify-center">
        {isWindowOpen ? (
          <button className="btn bg-blue-400 capitalize flex items-center gap-[1rem] ">
            <BsFillPauseCircleFill />
            Pause
          </button>
        ) : (
          <button
            className="btn bg-red-400 capitalize flex items-center gap-[1rem]"
            onClick={openFullScreenWindow}>
            <BsRecordCircle /> Live
          </button>
        )}

        {isWindowOpen && (
          <button
            className="btn bg-red-400 flex items-center gap-[1rem]"
            onClick={() => setIsWindowOpen(false)}>
            <BsFillStopFill />
            Stop
          </button>
        )}

        <button className="btn bg-green-400 flex items-center gap-[1rem] ">
          <BsSave2Fill />
          Save
        </button>
      </div> */}

      {matchs.length === 0 && (
        <form action={addMatchToDatabase} className="flex flex-col gap-[1rem]">
          <div>
            <input
              type="number"
              name="duration"
              id="duration"
              placeholder="duration"
              className="p-3 rounded-xl capitalize text-black text-center"
            />
          </div>
          <div className="flex items-center justify-evenly">
            <input
              type="text"
              name="teamA"
              id="teamA"
              placeholder="enter team A name"
              className="p-3 rounded-xl capitalize text-black text-center"
            />
            <input
              type="text"
              name="teamB"
              id="teamB"
              placeholder="enter team B name"
              className="p-3 rounded-xl capitalize text-black text-center"
            />
          </div>

          <button
            type="submit"
            className="btn bg-blue-500 text-white w-min mx-auto">
            Add
          </button>
        </form>
      )}

      {matchs.length > 0 && (
        <div>
          <h1 className="h2">Match Details</h1>
          <div className="w-full flex items-center flex-col justify-between mx-auto ">
            <div className="flex items-center justify-evenly p-3 w-full">
              <h2 className="h2">
                {matchs.map((match) => (
                  <div key={match.id} className="p-5 shadow">
                    <p>{match.teamA}</p>
                  </div>
                ))}
              </h2>
              <h2 className="uppercase font-poppins font-medium tracking-wider flex items-center justify-center gap-3 p-3 px-[2rem] rounded-full underline text-gray-500 ">
                vs Changes
              </h2>

              <h2 className="h2">
                {matchs.map((match) => (
                  <div key={match.id} className="p-5 shadow">
                    <p>{match.teamB}</p>
                  </div>
                ))}
              </h2>
            </div>

            <form action="" className="w-full">
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

              <div className="box-1 p-3 w-full ">
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

              <div className="box-1 p-3 bg-gray-800">
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

              <div className="box-1  p-3">
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
            </form>
          </div>

          <div className="flex items-center gap-[1rem] justify-center">
            {/* {!isWindowOpen && ( */}
            {
              <>
                <button
                  className="btn bg-white text-black capitalize flex items-center gap-[1rem] "
                  type="submit">
                  <GrUpdate />
                  Update
                </button>

                <button className="btn bg-red-500 bg-white-400 flex items-center gap-[1rem] ">
                  <GiCancel />
                  Cancel
                </button>
              </>
            }
          </div>
        </div>
      )}
    </div>
  );
}
