"use client";
import React, { useEffect, useState } from "react";
import Banner from "../../../components/Banner";
import Details from "../../../components/Details";
import Score from "../../../components/Score";

interface MatchData {
  id: number;
  match_name: string;
  duration: string;
  team_one_name: string;
  team_two_name: string;
  team_one_logo: string;
  team_two_logo: string;
  trophy: string;
  team_one_image_url: string;
  team_two_image_url: string;
  trophy_image_url: string;
}

const Page = () => {
  const [data, setData] = useState<MatchData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://score-demo.yalpos.com/api/match/1", {
        next: { revalidate: 10 },
      });
      const response = await res.json();
      setData(response.success.match);
    };

    fetchData();
  }, []);

  return (
    <div className="text-white">
      {data ? (
        <>
          <h1>{data.match_name}</h1>
          <p>Duration: {data.duration}</p>
          <p>Team One: {data.team_one_name}</p>
          {/* <img src={data.team_one_image_url} alt={data.team_one_name} /> */}
          <p>Team Two: {data.team_two_name}</p>
          {/* <img src={data.team_two_image_url} alt={data.team_two_name} /> */}
          {/* <img src={data.trophy_image_url} alt="Trophy" /> */}

          <Score
            // id={data.id}
            matchName={data.match_name}
            duration={data.duration}
            teamOneName={data.team_one_name}
            teamTwoName={data.team_two_name}
            teamOneLogo={data.team_one_logo}
            teamTwoLogo={data.team_two_logo}
          />
          {/* <Details
            trophy={data.trophy}
            teamOneImageUrl={data.team_one_image_url}
            teamTwoImageUrl={data.team_two_image_url}
            trophyImageUrl={data.trophy_image_url}
          /> */}
          {/* <Banner
            teamOneImageUrl={data.team_one_image_url}
            teamTwoImageUrl={data.team_two_image_url}
            trophyImageUrl={data.trophy_image_url}
          /> */}
        </>
      ) : (
        <div className="w-screen h-screen flex items-center justify-center text-4xl text-white ">
          Match Loading...
        </div>
      )}
    </div>
  );
};

export default Page;
