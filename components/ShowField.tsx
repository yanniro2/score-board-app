import React from "react";

interface ShowFieldProps {
  teamA: string;
  teamB: string;
  name: string;
}

const ShowField: React.FC<ShowFieldProps> = ({ teamA, teamB, name }) => {
  return (
    <div>
      <div className="text-white">
        team one {name}: {teamA}
      </div>
      <div className="text-white">
        team two {name}: {teamB}
      </div>
    </div>
  );
};

export default ShowField;
