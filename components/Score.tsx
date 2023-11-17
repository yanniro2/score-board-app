"use client";
import { useState, useEffect } from "react";
import Team from "./Team";
import Clock from "./Clock";
import ScoreTotal from "./ScoreTotal";
export const revalidate = true;

interface ScoreDashboardProps {
  id: number;
}
const Page: React.FC<ScoreDashboardProps> = ({ id }) => {
  const [responseData, setResponseData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://scoreboard.yalpos.com/api/match/1`);
      const data = await res.json();
      setResponseData(data);
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
    <div className="container h-[31vh] justify-evenly gap-[2rem] mx-auto p-5 text-white shadow-xl mt-5 rounded-xl text-center flex flex-col   xl:text-[1rem] 2xl:text-[6rem] ">
      {responseData ? (
        <div className="w-[80%] h-full mx-auto">
          <div className="flex w-full items-end justify-around h-full">
            <Team
              teamName={responseData.success.match.team_one_name}
              teamLogo={responseData.success.match.team_one_image_url}
            />

            <div className="flex items-center flex-col justify-end  mx-auto 2xl:text-[8rem] h-full w-1/3 gap-[4rem] ">
              <ScoreTotal id={id} />
              <Clock time={responseData.success.match.match_duration} />
            </div>

            <Team
              teamName={responseData.success.match.team_two_name}
              teamLogo={responseData.success.match.team_two_image_url}
            />
          </div>
        </div>
      ) : (
        <div className="2xl:text-[6rem]  xl:text-[1rem]">loading</div>
      )}
    </div>
  );
};

export default Page;
