import React from "react";

const SubPoints = ({ teamA, teamB, name }: any) => {
  return (
    <div className="flex items-center justify-between w-[68%] my-[-6rem]   ">
      <h2 className="md:text-[1rem] lg:text-[1rem] text-[1rem]  xl:text-[1rem] 2xl:text-[10rem] text-yellow-500 font-bold font-roboto ">
        {teamA}
      </h2>
      <h2 className="font-roboto tracking-wider  md:text-[1rem] lg:text-[1rem] text-[1rem]   xl:text-[1rem] 2xl:text-[8rem] font-bold uppercase">
        {name}
      </h2>

      <h2 className="md:text-[1rem] lg:text-[1rem] text-[1rem]  xl:text-[1rem] 2xl:text-[10rem] text-yellow-500 font-bold font-roboto">
        {teamB}
      </h2>
    </div>
  );
};

export default SubPoints;
