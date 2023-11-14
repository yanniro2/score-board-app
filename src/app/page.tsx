"use client";
import { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import Details from "../../components/Details";
import Score from "../../components/Score";

const Page = () => {
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
    <div className="text-white">
      {responseData.data.is_live === "false" ? (
        <div className="w-screen h-screen flex items-center justify-center text-4xl text-white ">
          Match will be start at soon
        </div>
      ) : (
        <>
          <Score />
          <Details />
          <Banner />
        </>
      )}
    </div>
  );
};

export default Page;
