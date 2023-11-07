"use client";
import React from "react";
import RadioGroup from "./RadioGroup";
import { BiGrid, BiFullscreen, BiLayout } from "react-icons/bi";
import { LuPanelBottom } from "react-icons/lu";

const AdvertismentDashboard = () => {
  const options = [
    { label: "Default", value: "item1", icon: <BiGrid /> },
    { label: "Bottom", value: "item2", icon: <LuPanelBottom /> },
    { label: "Full Screen", value: "item3", icon: <BiFullscreen /> },
    { label: "3/4 Screen", value: "item4", icon: <BiLayout /> },
  ];

  return (
    <div className="w-1/2 h-max mx-auto  flex flex-col justify-between gap-[2rem]">
      <RadioGroup options={options} />;
    </div>
  );
};

export default AdvertismentDashboard;
