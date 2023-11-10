"use client";
import React, { useEffect, useState } from "react";
import SubPoints from "./SubPoints";

interface MatchData {
  success: boolean;
  result: string;
  data: {
    id: number;
    match_id: number;
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
    created_at: string;
    updated_at: string;
  };
}

const Details = () => {
  const [data, setData] = useState<MatchData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://score-demo.yalpos.com/api/score/1", {
          next: { revalidate: 10 },
        });
        const responseData: MatchData = await res.json();
        setData(responseData);
        console.log("Data", responseData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container h-[50vh] mx-auto bg-gray-900 rounded-xl p-5 text-white text-center">
      <h1 className="text-lg font-roboto font-semibold">Match Details</h1>

      <div className="flex items-center justify-evenly">
        <h2 className="h2">team A total</h2>
        <h2 className="uppercase font-poppins font-medium tracking-wider flex items-center justify-center gap-3 p-3 px-[2rem] rounded-full underline text-gray-500 ">
          vs Changes
        </h2>

        <h2 className="h2">team B total</h2>
      </div>

      <div className="flex flex-col gap-[1rem]">
        <SubPoints
          teamA={data?.data.team_one_try}
          name={"Try"}
          teamB={data?.data.team_two_try}
        />
        <SubPoints
          teamA={data?.data.team_one_conversion}
          name={"conversion"}
          teamB={data?.data.team_two_conversion}
        />
        <SubPoints
          teamA={data?.data.team_one_penalty}
          name={"penalty"}
          teamB={data?.data.team_two_penalty}
        />
        <SubPoints
          teamA={data?.data.team_one_goal}
          name={"drop goals"}
          teamB={data?.data.team_two_goal}
        />
      </div>
    </div>
  );
};

export default Details;
