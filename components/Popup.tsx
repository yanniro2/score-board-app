"use client";
import { useState, ChangeEvent } from "react";
import { createPortal } from "react-dom";

import {
  BsRecordCircle,
  BsSave2Fill,
  BsFillPauseCircleFill,
  BsFillStopFill,
} from "react-icons/bs";

// Define the type for your form data
type FormData = {
  match_id: string;
  additional_duration: string;
  team_one_total: string;
  team_two_total: string;
  team_one_try: string;
  team_two_try: string;
  team_one_conversion: string;
  team_two_conversion: string;
  team_one_penalty: string;
  team_two_penalty: string;
  team_one_goal: string;
  team_two_goal: string;
  [key: string]: string;
  is_live: string;
  is_change: string;
  // Index signature allowing any other string properties
};

interface ScoreDashboardProps {
  id: number;
}
const Popup: React.FC<ScoreDashboardProps> = ({ id }) => {
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
        ",fullscreen=yes,menubar=no,toolbar=no,location=no,personalbar=no,status=no,scrollbars=no,resizable=no,";
      let myWindow = window.open(`/live/${id}`, "_blank", features);
      if (myWindow) {
        const container = myWindow.document.createElement("div");
        myWindow.document.body.appendChild(container);
        createPortal("", container);
        setIsWindowOpen(true);
      }
    }
  };
  return (
    <div className="flex items-center gap-[1rem] justify-center">
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
    </div>
  );
};

export default Popup;


