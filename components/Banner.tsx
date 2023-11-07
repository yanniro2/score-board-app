import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="container mx-auto h-[10vh] flex overflow-hidden">
      <div className="w-1/2 h-full">
        <Image
          src="/assets/Denmark.png"
          width={100}
          height={100}
          alt="img flag"
          className="object-contain h-full w-full"
        />
      </div>

      <div className="w-1/2 h-full">
        <Image
          src="/assets/Denmark.png"
          width={100}
          height={100}
          alt="img flag"
          className="object-contain h-full w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
