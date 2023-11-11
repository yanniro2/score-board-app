"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Corrected import statement

const Page = ({ id, title, description }: any) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3001/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update the topic");
      }

      router.push("/crud"); // Updated to correct path
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-5">
      <header className="bg-blue-950 p-3 text-white flex justify-between items-center">
        <Link href={"/crud"}>GT Coding</Link>
        <Link href="/crud/addTopic" className="bg-white p-3 text-blue-950">
          Add topic
        </Link>
      </header>

      <main className="w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[1rem] pt-[1rem]">
          <input
            type="text"
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            placeholder="Update topic"
            className="capitalize border border-gray-200 w-full p-3"
          />
          <input
            type="text"
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            placeholder="Update Description"
            className="capitalize border border-gray-200 w-full p-3"
          />

          <button
            type="submit"
            className="p-3 bg-green-600 text-white w-fit capitalize">
            Update
          </button>
        </form>
      </main>
    </div>
  );
};

export default Page;
