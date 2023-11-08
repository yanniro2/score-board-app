"use client";
import Banner from "../../components/Banner";
import Details from "../../components/Details";
import Score from "../../components/Score";
import React, { useContext, useEffect, useState } from "react";
import { RadioContext } from "@/app/context/RadioContext";
export default function Home() {
  const { hide } = useContext(RadioContext);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (hide) {
      setHidden(hidden);
    }
    setHidden(hide);
  }, [hide, hidden]);

  return (
    <section className="w-screen h-screen flex flex-col items-center gap-[1rem] text-white ">
      <Score />
      <Details />
      <Banner />

      {hidden ? "hello" : "not working"}
    </section>
  );
}
