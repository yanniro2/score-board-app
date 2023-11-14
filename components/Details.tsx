"use client";
import { useState, useEffect } from "react";
import SubPoints from "./SubPoints";

export const revalidate = true;

export default function Page() {
  const [responseData, setResponseData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const res = await fetch("https://score-demo.yalpos.com/api/score/1");
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

  if (!responseData || !responseData.data) {
    // Add loading state if data is not yet available
    return <div>Loading...</div>;
  }

  return (
    <div className="container h-[50vh] mx-auto 2xl:text-[3rem] rounded-xl p-5 text-white text-center pt-[4rem]">
      {/* ... rest of your component code ... */}
      <div className="flex flex-col">
        <SubPoints
          teamA={responseData?.data.team_one_try}
          name={"Try"}
          teamB={responseData?.data.team_two_try}
        />
        <SubPoints
          teamA={responseData?.data.team_one_conversion}
          name={"conversion"}
          teamB={responseData?.data.team_two_conversion}
        />
        <SubPoints
          teamA={responseData?.data.team_one_penalty}
          name={"penalty"}
          teamB={responseData?.data.team_two_penalty}
        />
        <SubPoints
          teamA={responseData?.data.team_one_goal}
          name={"drop goals"}
          teamB={responseData?.data.team_two_goal}
        />
      </div>
    </div>
  );
}
