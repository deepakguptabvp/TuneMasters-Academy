"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

const UpcomingWebinars = () => {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-2 bg-gray-900 w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <Spotlight />
        <div id="1" className="text-center">
          <h2 className="mt-10 text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-8 text-xl leading-8 font-extrabold tracking-tight text-white md:text-4xl">
            <u> Enhance Your Musical Journey</u>
          </p>
        </div>

        <div id="2" className="text-center">
          <HoverEffect
            className=""
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div id="3" className="text-center my-8 ">
          <Link
            href={"/"}
            className="px-4 py-2 rounded-lg border border-neutral-600 text-neutral-700
        bg-white hover:bg-gray-300 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
