import React from "react";
import Image from "next/image";
const Team = ({ teamName, teamLogo }: any) => {
  return (
    <div className="flex items-center justify-center flex-col gap-[1rem]">
      {/* <Image
        src={teamLogo}
        width={100}
        height={50}
        alt="img flag"
        className="border border-gray-700 rounded p-1 bg-gray-900  shadow-md"
      /> */}
      <div className="font-semibold font-poppins">{teamName}</div>
    </div>
  );
};

export default Team;
