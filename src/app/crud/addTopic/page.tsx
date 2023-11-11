"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  // Updated component name to start with an uppercase letter
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title or Description are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/crud");
      } else {
        throw new Error("Failed to create a topic");
      }
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
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="title"
            placeholder="add topic"
            className="capitalize border border-gray-200 w-full p-3 "
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            name="description"
            id="description"
            placeholder="add Description"
            className="capitalize border border-gray-200 w-full p-3 "
          />

          <button type="submit" className="p-3 bg-green-600 text-white w-fit">
            Add
          </button>
        </form>
      </main>
    </div>
  );
};

export default Page;
