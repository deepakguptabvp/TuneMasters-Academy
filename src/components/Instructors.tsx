"use client";
// import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { BackgroundLines } from "@/components/ui/background-lines";
import instructors from "@/data/instructor_data";

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      {/* <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full"> */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2
          className="text-2xl md:text-4xl lg:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
        {/* </WavyBackground> */}
      </BackgroundLines>
    </div>
  );
}

export default Instructors;
