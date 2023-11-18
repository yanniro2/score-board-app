"use client";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { MdOutlineChangeCircle } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
const SubmitBtn = () => {
  const { pending } = useFormStatus();

  const [start, setStart] = useState<boolean>(false);

  const handleClick = () => {
    setStart(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <button
      type="submit"
      className="bg-white py-3 px-6 font-semibold text-black  transition absolute top-6 right-6 rounded-xl flex items-center justify-center gap-[1rem] drop-shadow shadow-md m-1 "
      disabled={pending}
      onClick={handleClick}>
      {pending ? (
        <div className="text-blue-500 flex items-center justify-center gap-[1rem] ">
          {start ? (
            <div className="flex items-center justify-center gap-[1rem]">
              Checking.... <MdOutlineChangeCircle className="text-[1.5rem]" />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-[1rem]">
              Click to Add
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-[1rem] ">
          {start ? (
            <div className="flex items-center justify-center gap-[1rem]">
              Added Success
              <IoCheckmarkDoneCircle className="text-green-600 text-[1.5rem]" />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-[1rem]">
              Click to Add <MdOutlineChangeCircle className="text-[1.5rem]" />
            </div>
          )}
        </div>
      )}
    </button>
  );
};

export default SubmitBtn;
