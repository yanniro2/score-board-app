import React from "react";
import RemoveButton from "./RemoveButton";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
const Topic = ({ data }: any) => {
  return (
    <div className="w-full flex items-start justify-between p-3 rounded shadow">
      <div>
        <h1 className="font-semibold">{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <div className="flex p-3 text-2xl gap-[1rem]">
        <RemoveButton id={data._id} />
        <Link href={`/crud/editTopic/${data._id}`}>
          <FaEdit />
        </Link>
      </div>
    </div>
  );
};

export default Topic;
