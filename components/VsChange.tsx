"use client";
import { useState, ChangeEvent } from "react";
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
    is_live: "true", // "true" or "false"
    is_change: "c",
  });

  const handleSubmit = async () => {
    const formDataObj = new FormData();

    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    try {
      const response = await fetch(
        "https://scoreboard.yalpos.com/api/score/1",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      const data = await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      is_change: value,
    }));
  };

  return (
    <div className="text-white">
      <div>
        <label htmlFor="v">Vs</label>
        <input
          id="v"
          type="radio"
          name="is_change"
          value="v"
          checked={formData.is_change === "v"}
          onChange={handleRadioChange}
        />

        <label htmlFor="c"> Change</label>
        <input
          id="c"
          type="radio"
          name="is_change"
          value="c"
          checked={formData.is_change === "c"}
          onChange={handleRadioChange}
        />
      </div>

      {/* Your form and UI components go here */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default YourComponent;
