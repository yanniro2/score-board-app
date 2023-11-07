import React from "react";
import ScoreDashboard from "../../../components/ScoreDashboard";
import AdvertismentDashboard from "../../../components/AdvertismentDashboard";

const page = () => {
  return (
    <section className="w-screen h-screen p-5 text-center flex items-start justify-start gap-[2rem]">
      <ScoreDashboard />
      <AdvertismentDashboard />
    </section>
  );
};

export default page;
