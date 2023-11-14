"use client";
import { useState, ChangeEvent } from "react";
// import { createPortal } from "react-dom";

// import {
//   BsRecordCircle,
//   BsSave2Fill,
//   BsFillPauseCircleFill,
//   BsFillStopFill,
// } from "react-icons/bs";

// // Define the type for your form data
// type FormData = {
//   match_id: string;
//   additional_duration: string;
//   team_one_total: string;
//   team_two_total: string;
//   team_one_try: string;
//   team_two_try: string;
//   team_one_conversion: string;
//   team_two_conversion: string;
//   team_one_penalty: string;
//   team_two_penalty: string;
//   team_one_goal: string;
//   team_two_goal: string;
//   [key: string]: string;
//   is_live: string;
//   is_change: string;
//   // Index signature allowing any other string properties
// };
// const Popup = () => {
//   const [isWindowOpen, setIsWindowOpen] = useState(false);
//   let myWindow: Window | null = null; // Declare myWindow variable with Window type and null initialization

//   const openFullScreenWindow = () => {
//     if (window) {
//       const width = window.screen.width;
//       const height = window.screen.height;
//       const features =
//         "width=" +
//         width +
//         ",height=" +
//         height +
//         ",fullscreen=yes,menubar=no,toolbar=no,location=no,personalbar=no,status=no,scrollbars=no,resizable=no";
//       let myWindow = window.open("/", "_blank", features);
//       if (myWindow) {
//         const container = myWindow.document.createElement("div");
//         myWindow.document.body.appendChild(container);
//         createPortal("", container);
//         setIsWindowOpen(true);
//       }
//     }
//   };
//   return (
//     <div className="flex items-center gap-[1rem] justify-center">
//       {isWindowOpen ? (
//         <button className="btn bg-blue-400 capitalize flex items-center gap-[1rem] ">
//           <BsFillPauseCircleFill />
//           Pause
//         </button>
//       ) : (
//         <button
//           className="btn bg-red-400 capitalize flex items-center gap-[1rem]"
//           onClick={openFullScreenWindow}>
//           <BsRecordCircle /> Live
//         </button>
//       )}

//       {isWindowOpen && (
//         <button
//           className="btn bg-red-400 flex items-center gap-[1rem]"
//           onClick={() => setIsWindowOpen(false)}>
//           <BsFillStopFill />
//           Stop
//         </button>
//       )}

//       <button className="btn bg-green-400 flex items-center gap-[1rem] ">
//         <BsSave2Fill />
//         Save
//       </button>
//     </div>
//   );
// };

// export default Popup;

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

const YourComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    match_id: "1",
    additional_duration: "0",
    team_one_total: "0",
    team_two_total: "0",
    team_one_try: "0",
    team_two_try: "0",
    team_one_conversion: "0",
    team_two_conversion: "0",
    team_one_penalty: "0",
    team_two_penalty: "0",
    team_one_goal: "5",
    team_two_goal: "0",
    is_live: "false", // "true" or "false"
    is_change: "c",
  });

  const [apiResponse, setApiResponse] = useState<string | null>(null);

  const handleSubmit = async () => {
    const formDataObj = new FormData();

    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    try {
      const response = await fetch("https://score-demo.yalpos.com/api/score", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();
      setApiResponse(JSON.stringify(data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      is_live: value,
    }));
  };

  return (
    <div className="text-white">
      <div>
        <label>
          <input
            type="radio"
            name="is_live"
            value="true"
            checked={formData.is_live === "true"}
            onChange={handleRadioChange}
          />
          Live
        </label>

        <label>
          <input
            type="radio"
            name="is_live"
            value="false"
            checked={formData.is_live === "false"}
            onChange={handleRadioChange}
          />
          Not Live
        </label>
      </div>

      {/* Your form and UI components go here */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default YourComponent;
