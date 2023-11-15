"use client";
import { useState, useEffect } from "react";
export const revalidate = true;

interface ScoreDashboardProps {
  id: number;
}

const Page: React.FC<ScoreDashboardProps> = ({ id }) => {
  const [responseData, setResponseData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://score-demo.yalpos.com/api/score/${id}`);
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
    <div className="font-roboto font-bold w-full">
      {responseData ? (
        <div className="flex items-center justify-center gap-[1rem] text-4xl 2xl:text-[3rem]">
          {responseData?.data.total_score_team_one} <span>:</span>
          {responseData?.data.total_score_team_two}
        </div>
      ) : (
        <div className="2xl:text-[6rem]">loading</div>
      )}
    </div>
  );
};

export default Page;
