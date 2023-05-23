import React from 'react'
import Heading from './Heading'

const Skills = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
        <Heading title="Skills"/>
        <p className='text-gray-600 -mt-10 mb-10'>My programming know how and the extent of my knowledge about various programming techniques are as below:</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <p>Next.js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[90%]'></div>
                </div>
            </div>

            <div>
                <p>HTML</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[60%]'></div>
                </div>
            </div>

            <div>
                <p>Tailwind CSS</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[100%]'></div>
                </div>
            </div>

            <div>
                <p>C Programming</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[90%]'></div>
                </div>
            </div>

            <div>
                <p>Java</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[95%]'></div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Skills
