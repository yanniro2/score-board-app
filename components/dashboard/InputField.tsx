import React from "react";
interface InputFieldProps {
  teamA: string;
  teamB: string;
  name: string;
}
const InputField: React.FC<InputFieldProps> = ({ teamA, teamB, name }) => {
  return (
    <div className="box-1">
      <input
        type="number"
        id={teamA}
        name={teamA}
        className="input"
        placeholder="enter value"
      />
      <h2 className="capitalize font-roboto font-normal tracking-wider flex items-center justify-center text-gray-500">
        {name}
      </h2>
      <input
        type="number"
        id={teamB}
        name={teamB}
        className="input"
        placeholder="enter value"
      />
    </div>
  );
};

export default InputField;
