import React from 'react'
import Link from 'next/link'
import {HiDownload} from 'react-icons/hi'
import {FiMenu} from 'react-icons/fi'

const Navbar = ({toggleSidebar}) => {
  return (
    <div className='bg-white fixed top-0 w-[100%] z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-4'>
        <div className='text-[24px]'>Aishika Dutta</div>
        <div className='hidden md:flex gap-6'>
             <a href=' ' className=' hover:text-[#ff4D41]'>Home</a>
             <a href='/About.js' className=' hover:text-[#ff4D41]'>About</a>
             <a href=' ' className=' hover:text-[#ff4D41]'>Portfolio</a>
             <a href=' ' className=' hover:text-[#ff4D41]'>Blog</a>
             <a href=' ' className=' hover:text-[#ff4D41]'>Conatct</a>
          </div>
        <a href='#' className='hidden md:flex border border-[#ff4D41] px-4 py-1 text-[#ff4D41] rounded-[5px] items-center gap-2 hover:bg-[#ff4D41] hover:text-white transition duration-200' >
            Download CV
            <HiDownload/>
            </a>
            <div className='md:hidden text-[24px]' onClick={toggleSidebar}>
                <FiMenu/>
            </div>
      </div>
    </div>
  )
}

export default Navbar
