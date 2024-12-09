import React from "react";
import { Roboto, Pacifico, Roboto_Mono } from "@next/font/google";
import Image from "next/image";
import myImage from "@/app/public/Frame 3 1.png";
import { Button } from "./ui/button";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

const roboto_Mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300"],
});

const Main = () => {
  return (
    <center>
      <div className="flex justify-center space-x-5 text-[32px] md:text-5xl mt-7 md:relative md:text-left md:mt-44 md:mr-[61px]">
        <div className={roboto.className}>
          <div className="text-white">Hello i&rsquo;m</div>
        </div>
        <div className={pacifico.className}>
          <h1 className="text-[rgb(255,74,38)] ">Zohaib Shah</h1>
        </div>
      </div>
        <div className="text-white text-[32px] md:text-5xl md:mr-[93px] ">Front End Developer</div>
      <div>
        <Image
          src={myImage}
          alt="my picture"
          className="mt-6 w-96 md:absolute right-12 bottom-16 md:w-96"
        />
        <div className={roboto_Mono.className}>
          <div className="text-white md:text-left md:ml-8 md:mt-5 md:text-sm">
            <p>
              I am a Creative Thinker | Turning Ideas into Digital
              Reality
            </p>
            <p>
              I am a Web Developer | Crafting Seamless User Experiences
            </p>
            <p>
              I am a Frontend Engineer | Building Beautiful, Responsive
              Websites
            </p>
            <Button className="bg-[rgb(255,74,38)] mt-8 rounded-full">
              Download Cv
            </Button>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Main;
