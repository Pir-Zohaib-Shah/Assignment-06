import React from 'react';
import Image from 'next/image';
import contact_icon from "@/app/public/contact_icon.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import Sidebar from './sidebar';


const Contact = () => {
  return (
    <>
    <div className='flex justify-center md:justify-start'>
        <div className="hidden sm:block">
            <Sidebar/>
        </div>
    <div className='flex flex-col items-center w-[350px] md:ml-[200px]'>
    <div><Image src={contact_icon} alt='contact icon' className='w-[180px] mt-10 md:w-56 md:ml-[200px]'/></div>
    <div className="grid w-10/12 max-w-sm items-center sm:gap-1.5 mt-8">
      <Label className='mb-1' htmlFor="name">Full Name</Label>
      <Input type="name" id="name" placeholder="Enter your name here" className='text-white' />
    </div>
    <div className="grid w-10/12 max-w-sm items-center gap-1.5 mt-6">
      <Label className='mb-1' htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your Email here" className='text-white' />
    </div>
    <div className="grid w-10/12 max-w-sm items-center gap-1.5 mt-6">
      <Label className='mb-1' htmlFor="tel">Phone no.</Label>
      <Input type="tel" id="tel" placeholder="Enter your Phone here" className='text-white' />
    </div>
   <div className="grid w-10/12 max-w-sm items-start flex-col gap-1.5 mt-6">
  <Label className='mb-1' htmlFor="message">Message</Label>
  <Input type="text" id="message" placeholder="Enter your Message here" className='text-white h-32 md:h-20 pt-1' />
</div>

    <Button className="bg-[rgb(255,74,38)] mt-8 text-[14px] h-10 w-32 md:ml-[300px] text-white rounded-full">
              Submit
            </Button>
      </div>
    </div>
    </>
  )
}

export default Contact