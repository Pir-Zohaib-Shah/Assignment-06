'use client'
import Image from "next/image";
import logo from "@/app/public/Group 1.png";
import { HiHome } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaPhone } from "react-icons/fa6";
import { useRouter } from "next/navigation";


const Sidebar = () => {

  const router = useRouter();

const goToHome = ()=> {
  router.push("/")
}
const goToAbout = ()=> {
  router.push("/about")
}
const goToProjects = ()=> {
  router.push("/projects")
}
const goToContact = ()=> {
  router.push("/contact")
}
  return (
    <>
      <div className="h-screen w-60 bg-[rgb(66,66,66)] sticky top-0 flex-col items-center pt-6 pl-12 space-y-24">
        <Image src={logo} alt="Logo" className="h-28 w-28" />

        <ul className=" text-2xl text-white">
          <button
            className="flex hover:text-[rgb(255,74,38)]" onClick={goToHome}
          >
            <HiHome className="mt-1 mr-2" />
            Home
          </button>
          <button className="flex mt-6 hover:text-[rgb(255,74,38)]" onClick={goToAbout}>
            <IoPersonSharp className="mt-1 mr-2" /> About
            </button>
          <button className="flex mt-6 hover:text-[rgb(255,74,38)]" onClick={goToProjects}>
            <GrProjects className="mt-1 mr-2" /> Projects
            </button>
          <button className="flex mt-6 hover:text-[rgb(255,74,38)]" onClick={goToContact}>
            <FaPhone className="mt-1 mr-2" /> Contact
          </button>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
