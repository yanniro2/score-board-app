"use client";
import { useEffect, useState } from "react";
import { revalidatePath } from "next/cache";
import Banner from "../../components/Banner";
import Details from "../../components/Details";
import Score from "../../components/Score";

export interface Match {
  id?: number;
  teamA: string;
  teamB: string;
  duration: string;
}

export default function Home() {
  const [matchs, setMatchs] = useState<Match[]>([]);

  useEffect(() => {
    const fetchMatchs = async () => {
      try {
        const res = await fetch(
          "https://654c523b77200d6ba858ba96.mockapi.io/api/v1/match",
          {
            cache: "no-cache",
            next: {
              tags: ["match"],
            },
          }
        );

        const data: Match[] = await res.json();
        setMatchs(data);
        revalidatePath("/");
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchMatchs();
  }, []);

  return (
    <section className="w-screen h-screen flex flex-col items-center gap-[1rem] text-white ">
      {matchs.length > 0 ? (
        <>
          <Score />
          <Details />
          <Banner />
        </>
      ) : (
        <h1 className="text-4xl text-center text-white">
          Match has not started yet
        </h1>
      )}
    </section>
  );
}
