"use server";

import { revalidatePath } from "next/cache";
import { tryData_1 } from "../../../typings";

export const handleSubmit = async (e: FormData) => {
  const match_id = "2";
  const team_one_goal = e.get("team_one_goal")?.toString();
  const team_two_goal = e.get("team_two_goal")?.toString();
  const layout = e.get("layout")?.toString();

  if (
    (!team_one_goal || team_one_goal.trim() === "") &&
    (!team_two_goal || team_two_goal.trim() === "") &&
    (!layout || layout.trim() === "")
  ) {
    return;
  }

  const data: tryData_1 = {
    match_id,
    team_one_goal: team_one_goal || "",
    team_two_goal: team_two_goal || "",
    layout: layout || "",
  };

  await fetch("https://scoreboard.yalpos.com/api/score/1", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  revalidatePath("/press");
};
