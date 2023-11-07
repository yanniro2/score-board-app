import Image from "next/image";
import React from "react";
import Team from "./Team";

const Score = () => {
  return (
    <div className="container h-[30vh] justify-evenly gap-[2rem] mx-auto p-5 bg-gray-700 text-white shadow-xl mt-5 rounded-xl text-center flex flex-col">
      <div className="w-1/2 h-1/4 mx-auto flex items-center justify-evenly ">
        <Image
          src="/assets/trophy.png"
          width={100}
          height={100}
          alt="img flag"
          className="object-contain h-full w-auto"
        />

        <h1 className="text-4xl font-bold uppercase font-poppins w-max">
          World cup 2023
        </h1>
        <Image
          src="/assets/trophy.png"
          width={100}
          height={100}
          alt="img flag"
          className="object-contain h-full w-auto"
        />
      </div>

      <div className="flex items-center justify-between w-1/2 mx-auto">
        <Team />

        <div className=" w-1/2 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-[1rem] text-4xl">
            <div className=" w-[4rem] h-[4rem] bg-gray-800 rounded drop-shadow flex items-center justify-center">
              1
            </div>
            <div>:</div>
            <div className=" w-[4rem] h-[4rem] bg-gray-800  rounded drop-shadow flex items-center justify-center">
              3
            </div>
          </div>
          <div className="text-lg bg-gray-800 drop-shadow px-4 py-1 w-min rounded-full border border-gray-900 ">
            90:00
          </div>
        </div>

        <Team />
      </div>
    </div>
  );
};

export default Score;
