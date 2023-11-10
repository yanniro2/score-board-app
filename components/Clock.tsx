"use client";
import React, { useEffect, useState } from "react";

interface ClockProps {
  time: string;
}

const Clock: React.FC<ClockProps> = ({ time }) => {
  const initialTimeFormat = `00:0${time}:00`;
  const [remainingTime, setRemainingTime] = useState<string>(initialTimeFormat);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = decreaseTime(remainingTime);
      setRemainingTime(newTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [remainingTime]);

  const decreaseTime = (time: string): string => {
    const parts = time.split(":");
    let hours = parseInt(parts[0], 10);
    let minutes = parseInt(parts[1], 10);
    let seconds = parseInt(parts[2], 10);

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds > 0) {
      totalSeconds -= 1;
      hours = Math.floor(totalSeconds / 3600);
      minutes = Math.floor((totalSeconds % 3600) / 60);
      seconds = totalSeconds % 60;
    }

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return <>{remainingTime}</>;
};

export default Clock;
