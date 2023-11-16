"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { tryData } from "../../../typings";

export const handleSubmit = async (e: FormData) => {
  const match_id = "2";
  const team_one_try = e.get("team_one_try")?.toString();
  const team_two_try = e.get("team_two_try")?.toString();

  if (!team_one_try || !team_two_try) return;

  const data: tryData = {
    match_id,
    team_one_try,
    team_two_try,
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
