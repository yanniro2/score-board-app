"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
const RemoveButton = ({ id }: any) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure");

    if (confirmed) {
      const res = await fetch(`http://localhost:3001/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTopic}>
      <AiTwotoneDelete />
    </button>
  );
};

export default RemoveButton;
