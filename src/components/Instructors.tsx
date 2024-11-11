"use client";
// import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { BackgroundLines } from "@/components/ui/background-lines";

const instructors = [
  {
    id: 1,
    name: "Sachet Tandon",
    designation: "Vocal Coach",
    image:
      "https://c.saavncdn.com/artists/Sachet_Tandon_20191129105330_500x500.jpg",
  },
  {
    id: 2,
    name: "Amritanshu Dutta",
    designation: "Guitar Instructor",
    image:
      "https://img.wynk.in/unsafe/320x180/top/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_saregama/20230719172619000/8907212008646/1689768920855/resources/8907212008646.jpg",
  },
  {
    id: 3,
    name: "Anita S Bangera",
    designation: "Piano Teacher",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHxnkNOwKKSgIujyL19b-dKP1TbwwvjdBeg&s",
  },
  {
    id: 4,
    name: "Nishant Rastogi",
    designation: "Drumming Expert",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRK4LKT2qTdwlfx8j4SIw_peGEgx6ertegw&s",
  },
  {
    id: 5,
    name: "Nandita Acharya",
    designation: "Sitar Expert",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQt7aZ50pF7F_nDwAoyxg9VH2hyzIedFGmg&s",
  },
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      {/* <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full"> */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2
          className="text-2xl md:text-4xl lg:text-7xl  font-bold text-center mb-8 bg-clip-text text-transparent 
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
