import React from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/sidebar'
import Abouts from '@/components/about'

const About = () => {


  return ( <>
    <div className='flex justify-center md:flex md:justify-start'><div className='hidden sm:block'><Sidebar/></div><div className='flex justify-center'><Abouts/></div></div>
    </>
  )
}

export default About