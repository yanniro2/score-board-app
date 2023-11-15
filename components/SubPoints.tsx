import React from "react";

const SubPoints = ({ teamA, teamB, name }: any) => {
  return (
    <div className="flex items-center justify-between  p-3 w-2/3 mx-auto 2xl:text-[3rem]">
      <h2 className="2xl:text-[3rem]">{teamA}</h2>
      <h2 className="capitalize font-roboto font-normal tracking-wider flex items-center justify-center md:text-xl xl:text-[3rem] ">
        {name}
      </h2>

      <h2 className="xl:text-[3rem]">{teamB}</h2>
    </div>
  );
};

export default SubPoints;
