import React from "react";
import Image from "next/image";
const Team = ({ teamName, teamLogo }: any) => {
  // const imageUrl = teamLogo ? teamLogo : ;
  return (
    <div className="flex items-center justify-between flex-col gap-[1rem]  md:gap-5 py-[2rem]">
      {teamLogo ? (
        <Image
          src={teamLogo} // Add a leading slash to the relative path
          width={100}
          height={100}
          alt="img flag"
          className="border border-gray-700 rounded p-1 bg-gray-900  shadow-md"
          priority={true}
        />
      ) : (
        <Image
          src="/assets/team.png"
          width={100}
          height={100}
          alt="img flag"
          className="border border-gray-700 rounded p-1 bg-gray-900  shadow-md"
          priority={true}
        />
      )}
      <div className="font-semibold font-poppins md:text-xl 2xl:text-[3rem] md:text-[1rem] lg:text-[1rem] text-[1rem]   xl:text-[1rem] ">
        {teamName}
      </div>
    </div>
  );
};

export default Team;
