import React from 'react'
import Heading from './Heading'
import {RiLightbulbFlashLine} from 'react-icons/ri'

const WhatIDo = () => {
  return (
    <section className=' container mx-auto py-10 px-4 '>
      <Heading title="What I Do"/>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='shadow=lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white '>
            <RiLightbulbFlashLine className='text-[28px]'/>
            <h2 className='font-medium text-[20px]'>Trading</h2>
            <p>Out of little interest and the urge to fulfill my wishes
                I found myself so engrossed in the market and its stocks, that
                now I am trader. Earning profits, incurring losses, studying market, and 
                following charts being a regular in my life 
            </p>
        </div>

        <div className='shadow=lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white '>
            <RiLightbulbFlashLine className='text-[28px]'/>
            <h2 className='font-medium text-[20px]'>Travelling</h2>
            <p>Exporing the world is fascinating for me. So,
                whenever I find myself time, I sneak out with my bike
                out in the whole wide world expolring terrains 
                and adding to my travel diaries.
            </p>
        </div>

        <div className='shadow=lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white '>
            <RiLightbulbFlashLine className='text-[28px]'/>
            <h2 className='font-medium text-[20px]'>Programmer</h2>
            <p>Have a hobby of programming and trespassing
                the terrain of technology. Truely it's a magic itself
                as out near regualr life is controlled by technologies surrounding us.
                So, I have learnt a number of programming languages and implement
                them as I am doing rightnow to create my portfolio.
            </p>
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
