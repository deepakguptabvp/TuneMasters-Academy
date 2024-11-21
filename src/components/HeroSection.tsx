import React from "react";
import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";
import { WavyBackground } from "./ui/wavy-background";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center 
       justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      {/* <Spotlight /> */}
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <div className="p-4 relative z-10 w-full text-center">
          <h1
            className="mt-20 md:mt-0 text-4xl font-bold bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-50 to-neutral-400 md:text-7xl "
          >
            Master the Art of Music
          </h1>

          <p className="mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Dive into our comprehensive music courses and transform your musical
            journey today. Whether you&apos;re a beginner or looking to refine
            your skills, join us to unlock your true potential.
          </p>

          <div className="mt-10 text-neutral-300 font-bold text-xl">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-zinc-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <Link href={"/courses"}>Explore Courses</Link>
            </Button>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default HeroSection;
