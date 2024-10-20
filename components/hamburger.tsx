import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";

const Hamburger = () => {
  return (
    <div>
        <div className=''>
        <Accordion type="single" collapsible className="">
    <AccordionItem value="item-1">
      <AccordionTrigger><GiHamburgerMenu className='text-[rgb(255,74,38)] ml-3 text-2xl'/></AccordionTrigger>
      <AccordionContent> <Link href='/' className='text-[rgb(255,74,38)]'><center>Home</center></Link>
      </AccordionContent>
      <AccordionContent> <Link href='/about' className='text-[rgb(255,74,38)]'><center>About</center></Link>
      </AccordionContent>
      <AccordionContent> <Link href='/projects' className='text-[rgb(255,74,38)]'><center>Projects</center></Link>
      </AccordionContent>
      <AccordionContent> <Link href='/contact' className='text-[rgb(255,74,38)]'><center>Contact</center></Link>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
    </div>
  </div>
  )
}

export default Hamburger