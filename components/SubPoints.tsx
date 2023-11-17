import React from "react";

const SubPoints = ({ teamA, teamB, name }: any) => {
  return (
    // <div className="flex items-center justify-between  p-3 w-full md:text-[1rem] lg:text-[1rem] text-[1rem]   xl:text-[1rem] 2xl:text-[3rem] text-center ">
    <div className="flex items-center justify-between w-2/3">
      <h2 className="md:text-[1rem] lg:text-[1rem] text-[1rem]  xl:text-[1rem] 2xl:text-[6rem]">
        {teamA}
      </h2>
      <h2 className="capitalize font-roboto font-normal tracking-wider  md:text-[1rem] lg:text-[1rem] text-[1rem]   xl:text-[1rem] 2xl:text-[6rem] ">
        {name}
      </h2>

      <h2 className="xl:text-[3rem]">{teamB}</h2>
    </div>
  );
};

export default SubPoints;
