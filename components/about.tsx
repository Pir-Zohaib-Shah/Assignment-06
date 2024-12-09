import React from "react";
import Image from "next/image";
import Abouticon from "@/app/public/about-icon.png";
import { Roboto, Roboto_Mono } from "@next/font/google";
import { Button } from "./ui/button";
import Footer from "./footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
});
const roboto_Mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300"],
});

const Abouts = () => {
  return (
    <><div className="flex flex-col">
      <div className="flex flex-col items-center">
        <Image
          src={Abouticon}
          alt="about icon"
          className="w-44 md:w-56 mt-10 items-center"
        />
        <div className={roboto.className}>
          <div className="text-white mt-5 text-2xl text-center md:text-4xl">
            
            My name is Zohaib Shah
            <div className="text-white text-2xl text-center md:text-4xl">
            I&rsquo;m a

              <span className="text-[rgb(255,74,38)] ml-2">
                
                web developer <div className="text-white inline">&</div>
                designer
              </span>
            </div>
          </div>
          <div className={roboto_Mono.className}>
          <p className="text-center text-white text-sm mt-5 mx-4 md:text-base md:px-12">

            I started my coding journey in 2023 through the Governor Sindh
            initiative. Since then, I’ve been passionate about learning and
            expanding my skills in programming. Alongside coding, I have a deep
            love for photography, photo editing, and graphic design. I enjoy
            capturing moments and transforming then into visually striking
            creations. My diverse interests fuel my creativity and drive my
            desire to innovate in both tech and design. I’m excited to share my
            work with you and look forward to what the future holds.
          </p>
          </div>
          <div className="text-white list-none flex flex-col items-center mt-7">
          <div className="text-3xl text-center mt-4">My Skills</div>
          <div className="w-3/4 text-base">
            <li >

              <h3 className="mt-4 ml-2">HTML</h3>
              <span className="bg-[rgb(182,182,182)] block h-3 border-black border-2 overflow-hidden transition-all rounded-xl shadow-inner">
                <div className="h-6 mb-2 w-[95%] bg-[rgb(255,74,38)] "></div>
              </span>
              <h3 className="mt-5">CSS</h3>
              <span className="bg-[rgb(182,182,182)] block h-3 border-black border-2 overflow-hidden transition-all rounded-xl shadow-inner">
                <div className="h-6 mb-2 w-[95%] bg-[rgb(255,74,38)] "></div>
              </span>
              <h3 className="mt-5">TYPESCRIPT</h3>
              <span className="bg-[rgb(182,182,182)] block h-3 border-black border-2 overflow-hidden transition-all rounded-xl shadow-inner">
                <div className="h-6 mb-2 w-[75%] bg-[rgb(255,74,38)] "></div>
              </span>
              <h3 className="mt-5">NEXT.JS</h3>
              <span className="bg-[rgb(182,182,182)] block h-3 border-black border-2 overflow-hidden transition-all rounded-xl shadow-inner">
                <div className="h-6 mb-2 w-[60%] bg-[rgb(255,74,38)] "></div>
              </span>
              <h3 className="mt-5">TAILWIND CSS</h3>
              <span className="bg-[rgb(182,182,182)] block h-3 border-black border-2 overflow-hidden transition-all rounded-xl shadow-inner">
                <div className="h-6 mb-2 w-[95%] bg-[rgb(255,74,38)] "></div>
              </span>
            
            </li>
          </div>
        </div>
        </div>
        <div className="space-x-4">
            <Button className="bg-[rgb(255,74,38)] mt-8 text-[10px] h-8 text-white rounded-full">
              Download Cv
            </Button>
            <Button className="bg-[rgb(255,74,38)] mt-8 text-[10px] h-8 w-24 text-white rounded-full">
              Hire Me!
            </Button>
        </div>
      </div>
        <Footer/>
        </div>
    </>
  );
};

export default Abouts;
