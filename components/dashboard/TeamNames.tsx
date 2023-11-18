import React from "react";

interface TeamNamesProps {
  nameA: string;
  nameB: string;
}

const TeamNames: React.FC<TeamNamesProps> = ({ nameA, nameB }) => {
  return (
    <div className="w-3/4 flex items-start justify-between p-3 mx-auto">
      <div className="h2">{nameA}</div>
      <div className="h2">{nameB}</div>
    </div>
  );
};

export default TeamNames;
