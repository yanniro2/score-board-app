import React from "react";
import Link from "next/link";
import Topic from "../../../components/Topic";

const getTopic = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading is topics", error);
  }
};
const page = async () => {
  const { topics } = await getTopic();
  return (
    <div className="container mx-auto p-5">
      <header className="bg-blue-950 p-3 text-white flex justify-between items-center">
        <Link href={"/crud"}>GT Coding</Link>

        <Link href="/crud/addTopic" className="bg-white p-3 text-blue-950">
          Add topic
        </Link>
      </header>

      <main className="w-full">
        {topics.map((data: any) => (
          <Topic key={data.id} data={data} />
        ))}
      </main>
    </div>
  );
};

export default page;
