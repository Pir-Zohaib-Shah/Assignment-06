"use client";
import React from "react";
import Image from "next/image";
import project_icon from "@/app/public/project-icon.png";
import Sidebar from "@/components/sidebar";
import project_1 from "@/app/public/project-1.png";
import { Roboto, Pacifico, Roboto_Mono } from "@next/font/google";
import { Button } from "@/components/ui/button";

const roboto_Mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300"],
});

const projects = () => {
  return (
    <>
      <div className="flex justify-center md:justify-start">
        <div className="hidden sm:block">
          <Sidebar />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={project_icon}
            alt="project icon"
            className="w-44 md:w-56 mt-7 ml-10 md:ml-44"
          />
          <div className="md:flex md:space-x-32 md:ml-36">
          <div>
          <div className="md:h-[230px] h-[217px] w-[300px] bg-[rgb(66,66,66)] mt-6 md:mt-12 rounded-xl pt-1">
            <Image
              src={project_1}
              alt="project pic"
              className="border-black border-2 rounded-xl w-72 ml-[6px] mt-1"
            />
            <div className={roboto_Mono.className}>
              <div className="text-white text-xs ml-3 mt-3 md:text-base md:mt-1">
                My Portfolio Website
              </div>
            </div>
            <Button className="bg-[rgb(255,74,38)] mt-3 ml-3 text-[10px] md:text-base md:w-[122px] md:h-9 h-6 w-20 text-white rounded-full">
              view Project
            </Button>
          </div>
          <div className="md:h-[230px] h-[217px] w-[300px] bg-[rgb(66,66,66)] mt-6 md:mt-12 rounded-xl pt-1">
            <Image
              src={project_1}
              alt="project pic"
              className="border-black border-2 rounded-xl w-72 ml-[6px] mt-1"
            />
            <div className={roboto_Mono.className}>
              <div className="text-white text-xs ml-3 mt-3 md:text-base md:mt-1">
                My Portfolio Website
              </div>
            </div>
            <Button className="bg-[rgb(255,74,38)] mt-3 ml-3 text-[10px] md:text-base md:w-[122px] md:h-9 h-6 w-20 text-white rounded-full">
              view Project
            </Button>
          </div>
          </div>
          <div>
          <div className="md:h-[230px] h-[217px] w-[300px] bg-[rgb(66,66,66)] mt-6 md:mt-12 rounded-xl pt-1">
            <Image
              src={project_1}
              alt="project pic"
              className="border-black border-2 rounded-xl w-72 ml-[6px] mt-1"
            />
            <div className={roboto_Mono.className}>
              <div className="text-white text-xs ml-3 mt-3 md:text-base md:mt-1">
                My Portfolio Website
              </div>
            </div>
            <Button className="bg-[rgb(255,74,38)] mt-3 ml-3 text-[10px] md:text-base md:w-[122px] md:h-9 h-6 w-20 text-white rounded-full">
              view Project
            </Button>
          </div>
          <div className="md:h-[230px] h-[217px] w-[300px] bg-[rgb(66,66,66)] mt-6 md:mt-12 mb-9 rounded-xl pt-1">
            <Image
              src={project_1}
              alt="project pic"
              className="border-black border-2 rounded-xl w-72 ml-[6px] mt-1"
            />
            <div className={roboto_Mono.className}>
              <div className="text-white text-xs ml-3 mt-3 md:text-base md:mt-1">
                My Portfolio Website
              </div>
            </div>
            <Button className="bg-[rgb(255,74,38)] mt-3 ml-3 text-[10px] md:text-base md:w-[122px] md:h-9 h-6 w-20 text-white rounded-full">
              view Project
            </Button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
