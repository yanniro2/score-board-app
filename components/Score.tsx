"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Team from "./Team";
import Clock from "./Clock";

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
      const res = await fetch("https://score-demo.yalpos.com/api/match/1");
      const response = await res.json();
      setData(response.success.match);
    };

    fetchData();
  }, []);

  return (
    <div className="container h-[30vh] justify-evenly gap-[2rem] mx-auto p-5 bg-gray-700 text-white shadow-xl mt-5 rounded-xl text-center flex flex-col">
      {data ? (
        <div className="w-full h-full">
          <div className="w-1/2 h-1/4 mx-auto flex items-center justify-evenly ">
            {data.trophy_image_url ? (
              <Image
                src={data.trophy_image_url}
                width={100}
                height={100}
                alt="img flag"
                className="object-contain h-full w-auto"
              />
            ) : (
              <Image
                src="/assets/trophy.png"
                width={100}
                height={100}
                alt="img flag"
                className="object-contain h-full w-auto"
              />
            )}

            <h1 className="text-4xl font-bold uppercase font-poppins w-max">
              {data.match_name}
            </h1>
            {data.trophy_image_url ? (
              <Image
                src={data.trophy_image_url}
                width={100}
                height={100}
                alt="img flag"
                className="object-contain h-full w-auto"
              />
            ) : (
              <Image
                src="/assets/trophy.png"
                width={100}
                height={100}
                alt="img flag"
                className="object-contain h-full w-auto"
              />
            )}
          </div>

          <div className="flex items-center justify-between w-1/2 mx-auto">
            <Team teamName={data.team_one_name} teamLogo={data.team_one_logo} />

            <div className=" w-1/2 flex flex-col items-center justify-center gap-3">
              <div className="flex items-center justify-center gap-[1rem] text-4xl">
                <div className=" w-[4rem] h-[4rem] bg-gray-800 rounded drop-shadow flex items-center justify-center">
                  1
                </div>
                <div>:</div>
                <div className=" w-[4rem] h-[4rem] bg-gray-800  rounded drop-shadow flex items-center justify-center">
                  3
                </div>
              </div>
              <div className="text-lg bg-gray-800 drop-shadow px-4 py-1 w-min rounded-full border border-gray-900 ">
                {/* {data.duration} */}
                <Clock time={data.duration} />
              </div>
            </div>

            <Team teamName={data.team_two_name} teamLogo={data.team_two_logo} />
          </div>
        </div>
      ) : (
        <>loading</>
      )}
    </div>
  );
};

export default Page;
