import React from "react";

const InputField = ({ teamA, teamB, change, name }: any) => {
  return (
    <div className="box-1 p-3 bg-gray-800">
      <input
        type="number"
        name={teamA}
        id={teamA}
        value={teamA}
        placeholder={`${name} team a `}
        onChange={change}
        className="p-3 rounded-xl capitalize text-black text-center"
      />

      <h2 className="capitalize font-roboto font-normal tracking-wider flex items-center justify-center text-gray-500">
        {name}
      </h2>

      <input
        type="number"
        name={teamB}
        id={teamB}
        value={teamB}
        placeholder={`${name} team b`}
        onChange={change}
        className="p-3 rounded-xl capitalize text-black text-center"
      />
    </div>
  );
};

export default InputField;
