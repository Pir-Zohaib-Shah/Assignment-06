import Main from '@/components/main'
import React from 'react'
import Sidebar from '@/components/sidebar'

const Home = () => {
  return (
    <>
      
     <div className='flex'><div className='hidden sm:block'><Sidebar/></div><Main/></div> 
      
    </>
  )
}

export default Home