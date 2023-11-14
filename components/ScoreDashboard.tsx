"use client";
import { useState, ChangeEvent } from "react";
import Popup from "./Popup";
import { GrUpdate } from "react-icons/gr";


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
  layout: string;
  is_change: string;
  is_live: string;
  // Index signature allowing any other string properties
};

export const revalidate = true;
export default function ScoreDashboard() {
  const [formData, setFormData] = useState<FormData>({
    match_id: "1",
    additional_duration: "",
    team_one_total: "",
    team_two_total: "",
    team_one_try: "",
    team_two_try: "",
    team_one_conversion: "",
    team_two_conversion: "",
    team_one_penalty: "",
    team_two_penalty: "",
    team_one_goal: "",
    team_two_goal: "",
    layout: "layout1",
    is_change: "v",
    is_live: "false",
  });

  const [apiResponse, setApiResponse] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const formDataObj = new FormData();

    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    try {
      const response = await fetch("https://score-demo.yalpos.com/api/score", {
        method: "POST",
        body: formDataObj,
        next: { revalidate: 1 },
      });

      const data = await response.json();
      console.log("Response data:", data); // Log the response data

      setApiResponse(JSON.stringify(data));

      if (response.ok) {
        window.location.reload();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLayoutChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      layout: value,
    }));
  };

  return (
    <div className="md:w-full h-max mx-auto bg-gray-900 rounded-xl p-5 text-white text-center flex flex-col justify-between gap-[2rem] w-full">
      <Popup />

      <form action={handleSubmit} className="flex flex-col gap-[1rem] w-full">
        <div className="box-1 p-3 bg-gray-800 w-full">
          <input
            type="number"
            name="team_one_try"
            id="team_one_try"
            value={formData.team_one_try}
            placeholder="try team a"
            onChange={handleChange}
            className="p-3 rounded-xl capitalize text-black text-center"
          />

          <h2 className="capitalize font-roboto font-normal tracking-wider flex items-center justify-center text-gray-500">
            try
          </h2>

          <input
            type="number"
            name="team_two_try"
            id="team_two_try"
            value={formData.team_two_try}
            placeholder="try team b"
            onChange={handleChange}
            className="p-3 rounded-xl capitalize text-black text-center"
          />
        </div>

        <div className="box-1 p-3 bg-gray-800">
          <input
            type="number"
            name="team_one_conversion"
            id="team_one_conversion"
            value={formData.team_one_conversion}
            placeholder="conversion team a"
            onChange={handleChange}
            className="p-3 rounded-xl capitalize text-black text-center"
          />

          <h2 className="capitalize font-roboto font-normal tracking-wider flex items-center justify-center text-gray-500">
            conversion
          </h2>

          <input
            type="number"
            name="team_two_conversion"
            id="team_two_conversion"
            value={formData.team_two_conversion}
            placeholder="conversion team b"
            onChange={handleChange}
            className="p-3 rounded-xl capitalize text-black text-center"
          />
        </div>

        <div className="box-1 p-3 bg-gray-800">
          <input
            type="number"
            name="team_one_penalty"
            id="team_one_penalty"
            value={formData.team_one_penalty}
            placeholder="team a penalty"
            onChange={handleChange}
            className="p-3 rounded-xl capitalize text-black text-center"
          />

          <h2 className="capitalize font-roboto font-normal tracking-wider flex items-center justify-center text-gray-500">
            penalty
          </h2>

          <input
            type="number"
            name="team_two_penalty"
            id="team_two_penalty"
            value={formData.team_two_penalty}
            placeholder="team b penalty"
            onChange={handleChange}
            className="p-3 rounded-xl capitalize text-black text-center"
          />
        </div>

        <div className="box-1 p-3 bg-gray-800">
          <input
            type="number"
            name="team_one_goal"
            id="team_one_goal"
            value={formData.team_one_goal}
            placeholder="drop goal team a"
            onChange={handleChange}
            className="p-3 rounded-xl capitalize text-black text-center"
          />

          <h2 className="capitalize font-roboto font-normal tracking-wider flex items-center justify-center text-gray-500">
            drop goal
          </h2>

          <input
            type="number"
            name="team_two_goal"
            id="team_two_goal"
            value={formData.team_two_goal}
            placeholder="drop goal team b"
            onChange={handleChange}
            className="p-3 rounded-xl capitalize text-black text-center"
          />
        </div>

        <div>
          <input
            type="number"
            name="additional_duration"
            id="additional_duration"
            value={formData.additional_duration}
            placeholder="Add additional time"
            onChange={handleChange}
            className="p-3 rounded-xl capitalize text-black text-center"
          />
        </div>

        <button
          className="btn bg-white text-black capitalize flex items-center gap-[1rem] justify-center text-center mx-auto "
          type="submit">
          <GrUpdate />
          Update
        </button>
      </form>
    </div>
  );
}
