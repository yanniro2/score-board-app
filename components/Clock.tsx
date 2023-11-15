"use client";
import React, { useEffect, useState } from "react";

interface ClockProps {
  time: string;
}

const Clock: React.FC<ClockProps> = ({ time }) => {
  const initialTotalSeconds = parseInt(time, 10) * 60;
  const [remainingSeconds, setRemainingSeconds] =
    useState<number>(initialTotalSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingSeconds((prevSeconds) => Math.max(0, prevSeconds - 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <div>
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </div>
  );
};

export default Clock;
