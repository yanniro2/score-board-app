"use client";
import React, { useState, useEffect } from "react";

const Page: React.FC = () => {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const res = await fetch("https://scoreboard.yalpos.com/api/score/1", {
        cache: "no-cache",
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 1000); // Adjust the interval as needed (in milliseconds)

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  // Check if the necessary properties exist before accessing them

  if (!data || !data.data) {
    // Add loading state if data is not yet available
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="text-white">team one try :{data.data.team_one_try}</div>
      <div className="text-white">team two try :{data.data.team_two_try}</div>
      <div className="text-white">Layout :{data.data.layout}</div>
      <div className="text-white">VS Change :{data.data.is_change}</div>
    </>
  );
};

export default Page;
