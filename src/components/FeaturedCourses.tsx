"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/BackgroundGradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div id="1">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-4 mx-3 text-2xl leading-8 font-extrabold tracking-tight text-white md:text-4xl">
           <u> Learn with the best</u>
          </p>
        </div>
      </div>
      <div id="2" className="mt-14 mx-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center text-white">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center ">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900
              overflow-hidden h-full max-w-sm "
              >
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">
                    <u> {course.title}</u>
                  </p>
                  <p className="textr-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div id="3" className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded-lg border border-neutral-600 text-neutral-700
        bg-white  hover:bg-gray-300 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
