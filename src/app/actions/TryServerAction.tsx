"use server";

import { revalidatePath } from "next/cache";
import { tryData_1 } from "../../../typings";

export const handleSubmit = async (e: FormData) => {
  const match_id = "2";
  toString();
  const team_one_goal = e.get("team_one_goal")?.toString();
  const team_two_goal = e.get("team_two_goal")?.toString();

  if (
    (!team_one_goal || team_one_goal.trim() === "") &&
    (!team_two_goal || team_two_goal.trim() === "")
  ) {
    return;
  }

  const data: tryData_1 = {
    match_id,
    team_one_goal: team_one_goal || "",
    team_two_goal: team_two_goal || "",
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
