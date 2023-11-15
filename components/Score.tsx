"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Team from "./Team";
import Clock from "./Clock";
import ScoreTotal from "./ScoreTotal";
export const revalidate = true;
const Page = () => {
  const [responseData, setResponseData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const res = await fetch("https://score-demo.yalpos.com/api/match/1");
      const data = await res.json();
      setResponseData(data);
      // console.log(data.success.match.trophy_image_url);
      // console.log(data.success.match.trophy_image_url);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchData();
    };

    // Load data initially
    loadData();

    // Set up interval for automatic reload every 1 second
    const intervalId = setInterval(loadData, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  if (!responseData || !responseData.success.match.trophy_image_url) {
    // Add loading state if data is not yet available
    return <div>Loading...</div>;
  }

  return (
    <div className="container h-[30vh] justify-evenly gap-[2rem] mx-auto p-5 text-white shadow-xl mt-5 rounded-xl text-center flex flex-col large-width:bg-orange-300 2xl:text-[3rem]">
      {responseData ? (
        <div className="w-2/3 h-full mx-auto">
          <div className=" h-1/2 mx-auto flex items-center justify-between ">
            {/* {responseData.success.match.trophy_image_url ? (
              <Image
                src={responseData.success.match.trophy_image_url}
                width={500}
                height={500}
                alt="img flag"
                className="object-contain h-full w-auto"
                priority={true}
              />
            ) : (
              <Image
                src="/assets/trophy.png"
                width={500}
                height={500}
                alt="img flag"
                className="object-contain h-full w-auto"
                priority={true}
              />
            )} */}

            {/* <h1 className="text-4xl font-bold uppercase font-poppins w-max text-white 2xl:text-[5rem]"> */}
            {/* {responseData.success.match.match_name} */}
            {/* <Clock time={responseData.success.match.match_duration} /> */}
            {/* </h1> */}

            <div className="text-lg  drop-shadow px-4 py-2 w-min rounded-full 2xl:text-[5rem] 2xl:px-[4rem] 2xl:py-[3rem] mx-auto ">
              <Clock time={responseData.success.match.match_duration} />
            </div>

            {/* {responseData.success.match.trophy_image_url ? (
              <Image
                src={responseData.success.match.trophy_image_url}
                width={500}
                height={500}
                alt="img flag"
                className="object-contain h-full w-auto"
                priority={true}
              />
            ) : (
              <Image
                src="/assets/trophy.png"
                width={500}
                height={500}
                alt="img flag"
                className="object-contain h-full w-auto"
                priority
              />
            )} */}
          </div>

          <div className="flex w-full items-center justify-between">
            <Team
              teamName={responseData.success.match.team_one_name}
              teamLogo={responseData.success.match.team_one_image_url}
            />

            <ScoreTotal />

            <Team
              teamName={responseData.success.match.team_two_name}
              teamLogo={responseData.success.match.team_two_image_url}
            />
          </div>
        </div>
      ) : (
        <div className="2xl:text-[6rem]">loading</div>
      )}
    </div>
  );
};

export default Page;
