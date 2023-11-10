"use client";
import { useState, ChangeEvent, useEffect } from "react";
import Popup from "./Popup";
import { GrUpdate } from "react-icons/gr";
import { useRouter } from "next/navigation";

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
  [key: string]: string; // Index signature allowing any other string properties
};

export default function ScoreDashboard() {
  const router = useRouter();
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
    team_one_goal: "",
    team_two_goal: "0",
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
        next: { revalidate: 10 },
      });

      const data = await response.json();
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

  return (
    <div className="w-1/2 h-max mx-auto bg-gray-900 rounded-xl p-5 text-white text-center flex flex-col justify-between gap-[2rem]">
      <Popup />

      <div className="box-1 p-3 bg-gray-800">
        <input
          type="number"
          name="team_one_penalty"
          id="team_one_penalty"
          // value={formData.team_one_penalty}
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
          // value={formData.team_two_penalty}
          placeholder="team b penalty"
          onChange={handleChange}
          className="p-3 rounded-xl capitalize text-black text-center"
        />
      </div>
      <div className="box-1 p-3 bg-gray-800">
        <input
          type="number"
          name="team_one_try"
          id="team_one_try"
          // value={formData.team_one_try}
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
          // value={formData.team_two_try}
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
          // value={formData.team_one_conversion}
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
          // value={formData.team_two_conversion}
          placeholder="conversion team b"
          onChange={handleChange}
          className="p-3 rounded-xl capitalize text-black text-center"
        />
      </div>
      <div className="box-1 p-3 bg-gray-800">
        <input
          type="number"
          name="team_one_goal"
          id="team_one_goal"
          // value={formData.team_one_goal}
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
          // value={formData.team_two_goal}
          placeholder="try team b"
          onChange={handleChange}
          className="p-3 rounded-xl capitalize text-black text-center"
        />
      </div>

      <button
        className="btn bg-white text-black capitalize flex items-center gap-[1rem] justify-center text-center mx-auto "
        onClick={handleSubmit}>
        <GrUpdate />
        Update
      </button>
    </div>
  );
}
