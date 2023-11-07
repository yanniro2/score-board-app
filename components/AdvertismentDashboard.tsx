import React from "react";
import RadioGroup from "./RadioGroup";

const AdvertismentDashboard = () => {
  return (
    <div className="w-1/2 h-max mx-auto  flex flex-col justify-between gap-[2rem]">
      <RadioGroup />
      <RadioGroup />
    </div>
  );
};

export default AdvertismentDashboard;
