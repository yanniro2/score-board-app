"use server";

import { revalidatePath } from "next/cache";
import { tryData } from "../../../typings";

export const handleSubmit = async (e: FormData) => {
  const match_id = "2";
  const team_one_try = e.get("team_one_try")?.toString();
  const team_two_try = e.get("team_two_try")?.toString();
  const team_one_conversion = e.get("team_one_conversion")?.toString();
  const team_two_conversion = e.get("team_two_conversion")?.toString();
  const team_one_penalty = e.get("team_one_penalty")?.toString();
  const team_two_penalty = e.get("team_two_penalty")?.toString();
  const team_one_goal = e.get("team_one_goal")?.toString();
  const team_two_goal = e.get("team_two_goal")?.toString();
    const layout = e.get("layout")?.toString();

    if (
      (!team_one_try || team_one_try.trim() === "") &&
      (!team_two_try || team_two_try.trim() === "") &&
      (!team_one_conversion || team_one_conversion.trim() === "") &&
      (!team_two_conversion || team_two_conversion.trim() === "") &&
      (!team_one_penalty || team_one_penalty.trim() === "") &&
      (!team_two_penalty || team_two_penalty.trim() === "") &&
      (!team_one_goal || team_one_goal.trim() === "") &&
      (!team_two_goal || team_two_goal.trim() === "") &&
      (!layout || layout.trim() === "")
    ) {
      return;
    }

    const data: tryData = {
      match_id,
      team_one_try: team_one_try || "",
      team_two_try: team_two_try || "",
      team_one_conversion: team_one_conversion || "",
      team_two_conversion: team_two_conversion || "",
      team_one_penalty: team_one_penalty || "",
      team_two_penalty: team_two_penalty || "",
      team_one_goal: team_one_goal || "",
      team_two_goal: team_two_goal || "",
      layout: layout || "",
    };

  await fetch("https://score-demo.yalpos.com/api/score/2", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  revalidatePath("/press");
};
