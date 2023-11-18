"use client";
import React, { useState } from "react";
import { MdOutlineChangeCircle } from "react-icons/md";
import { useFormStatus } from "react-dom";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
const SubmitBtn = () => {
  const { pending } = useFormStatus();
  const [start, setStart] = useState<boolean>(false);
  return (
    <button
      type="submit"
      className="bg-white py-3 px-6 font-semibold text-black  transition absolute top-6 right-6 rounded-xl flex items-center justify-center gap-[1rem] drop-shadow shadow-md m-1 "
      disabled={pending}
      onClick={() => setStart(true)}>
      {pending ? (
        <div className="text-red-500 flex items-center justify-center gap-[1rem] ">
          {start ? (
            <div>Checking....</div>
          ) : (
            <div className="flex items-center justify-center gap-[1rem]">
              Check <MdOutlineChangeCircle className="text-[1.5rem]" />
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-[1rem] ">
          {start ? (
            <div className="flex items-center justify-center gap-[1rem]">
              Update
              <IoCheckmarkDoneCircle className="text-green-600 text-[1.5rem]" />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-[1rem]">
              Check <MdOutlineChangeCircle className="text-[1.5rem]" />
            </div>
          )}
        </div>
      )}
    </button>
  );
};

export default SubmitBtn;
