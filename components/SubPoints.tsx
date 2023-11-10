import React from "react";

const SubPoints = ({ teamA, teamB, name }: any) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-3 w-2/3 mx-auto">
      <h2 className="h2">{teamA}</h2>
      <h2 className="capitalize font-roboto font-normal tracking-wider flex items-center justify-center text-gray-500">
        {name}
      </h2>

      <h2 className="h2">{teamB}</h2>
    </div>
  );
};

export default SubPoints;
