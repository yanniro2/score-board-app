"use client";
import { ChangeEvent, useState } from "react";
import { useFormStatus } from "react-dom";

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

export default function YourPage() {
  // State to store the input values
  const { pending } = useFormStatus();
  const [formData, setFormData] = useState<FormData>({
    match_id: "",
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
    layout: "",
    is_change: "",
    is_live: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Perform the POST request using fetch
      const response = await fetch(
        "https://score-demo.yalpos.com/api/score/2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle success
        const responseData = await response.json();
        console.log("Success:", responseData);
        window.location.reload();
      } else {
        // Handle errors
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem]">
      <label htmlFor="team_one_try">Team One Try</label>
      <input
        type="text"
        id="team_one_try"
        name="team_one_try"
        value={formData.team_one_try}
        onChange={handleChange}
        className="text-black"
      />

      <label htmlFor="team_two_try">Team Two Try</label>
      <input
        type="text"
        id="team_two_try"
        name="team_two_try"
        value={formData.team_two_try}
        onChange={handleChange}
        className="text-black"
      />

      <button
        type="submit"
        className="bg-red-400 p-3 text-white disabled:bg-blue-400 transition"
        disabled={pending}>
        Submit
      </button>
    </form>
  );
}
