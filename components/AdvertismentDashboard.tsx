"use client";
import RadioGroup from "./RadioGroup";
import { BiGrid, BiFullscreen, BiLayout } from "react-icons/bi";
import { LuPanelBottom } from "react-icons/lu";

const AdvertismentDashboard = () => {
  const options = [
    {
      id: 1,
      heading: "Advertisements",
      data: [
        { label: "Default", value: "ad1", icon: <BiGrid /> },
        { label: "Bottom", value: "ad2", icon: <LuPanelBottom /> },
        { label: "Full Screen", value: "ad3", icon: <BiFullscreen /> },
        { label: "3/4 Screen", value: "ad4", icon: <BiLayout /> },
      ],
    },
  ];

  return (
    <div className="md:w-1/2 h-max mx-auto  flex flex-col justify-between gap-[2rem] w-full">
      {options.map((option) => (
        <RadioGroup
          key={option.id}
          options={option.data}
          heading={option.heading}
        />
      ))}

      {/* <ButtonCheck /> */}
    </div>
  );
};

export default AdvertismentDashboard;
