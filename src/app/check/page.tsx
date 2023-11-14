"use client";
import { useState, ChangeEvent } from "react";

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
      });

      const data = await response.json();
      setApiResponse(JSON.stringify(data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="text-white">
      {/* Input fields */}
      <input
        type="text"
        name="team_one_goal"
        value={formData.team_one_goal}
        onChange={handleChange}
        className="text-blue-900"
      />
      {/* Add more input fields for other form data properties as needed */}

      {/* Your form and UI components go here */}
      <button onClick={handleSubmit}>Submit</button>

      {/* Display the API response */}
      {apiResponse && <div>API Response: {apiResponse}</div>}
    </div>
  );
};

export default YourComponent;
