import React from "react";
interface InputFieldProps {
  teamA: string;
  teamB: string;
  name: string;
}
const InputField: React.FC<InputFieldProps> = ({ teamA, teamB, name }) => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <label htmlFor={teamA}>Team One {name}</label>
      <input type="text" id={teamA} name={teamA} className="text-black" />

      <label htmlFor={teamB}>Team Two {name}</label>
      <input type="text" id={teamB} name={teamB} className="text-black" />
    </div>
  );
};

export default InputField;
