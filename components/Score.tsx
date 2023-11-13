"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Team from "./Team";
import Clock from "./Clock";
export const revalidate = true;
const Page = () => {
  const [responseData, setResponseData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const res = await fetch("https://score-demo.yalpos.com/api/match/1");
      const data = await res.json();
      setResponseData(data);
      // console.log(data.success.match.trophy_image_url);
      console.log(data.success.match.trophy_image_url);
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
        <div className="w-full h-full">
          <div className="md:w-1/2 h-1/2 mx-auto flex items-center justify-evenly ">
            {responseData.success.match.trophy_image_url ? (
              <Image
                src={responseData.success.match.trophy_image_url}
                width={1000}
                height={1000}
                alt="img flag"
                className="object-contain h-full w-auto"
                priority={true}
              />
            ) : (
              <Image
                src="/assets/trophy.png"
                width={1000}
                height={1000}
                alt="img flag"
                className="object-contain h-full w-auto"
                priority={true}
              />
            )}

            <h1 className="text-4xl font-bold uppercase font-poppins w-max text-white 2xl:text-[3rem]">
              {responseData.success.match.match_name}
            </h1>
            {responseData.success.match.trophy_image_url ? (
              <Image
                src={responseData.success.match.trophy_image_url}
                width={1000}
                height={1000}
                alt="img flag"
                className="object-contain h-full w-auto"
                priority={true}
              />
            ) : (
              <Image
                src="/assets/trophy.png"
                width={1000}
                height={1000}
                alt="img flag"
                className="object-contain h-full w-auto"
                priority
              />
            )}
          </div>

          <div className="flex items-center justify-between md:w-1/2 mx-auto">
            <Team
              teamName={responseData.success.match.team_one_name}
              teamLogo={responseData.success.match.team_one_image_url}
            />

            <div className="  flex flex-col items-center justify-center gap-3 w-full">
              <div className="flex items-center justify-center gap-[1rem] text-4xl 2xl:text-[3rem]">
                <div className=" md:w-[4rem] md:h-[4rem]  rounded drop-shadow flex items-center justify-center 2xl:text-[5rem] 2xl:px-[3rem] 2xl:py-[3rem]">
                  1
                </div>
                <div>:</div>
                <div className=" w-[4rem] h-[4rem] rounded drop-shadow flex items-center justify-center 2xl:text-[5rem] 2xl:px-[3rem] 2xl:py-[3rem]">
                  3
                </div>
              </div>
              <div className="text-lg bg-gray-800 drop-shadow md:px-4 md:py-1 w-min rounded-full border border-gray-900 2xl:text-[5rem] 2xl:px-[4rem] 2xl:py-[3rem] ">
                {/* {data.duration} */}
                <Clock time={responseData.success.match.duration} />
              </div>
            </div>

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
