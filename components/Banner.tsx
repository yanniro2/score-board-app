"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
const Banner = () => {
  const [responseData, setResponseData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://scoreboard.yalpos.com/api/get-sponsor/1"
      );
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

  if (!responseData) {
    // Add loading state if data is not yet available
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto h-[9vh] flex overflow-hidden w-full -mt-[1rem]">
      {responseData.map((data: string) => (
        <Image
          key={data}
          src={data}
          width={500}
          height={500}
          alt="img flag"
          className="object-contain h-full w-full"
        />
      ))}
    </div>
  );
};

export default Banner;
