import React from 'react'
import TypeWriter from "typewriter-effect"
import Button from './Button'

const Hero = () => {
  return (
    <div
    className="h-screen bg-cover bg-center bg-fixed flex items-center bg-blue-200"
   >
         <div className='container mx-auto px-4'>
            <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>

                <div>
                    <h1 className='text-5xl'>I'm Aishika Dutta</h1>
                    <h4 className='text-2xl mt-3'>
                        <div className=" flex flex-row">
                            <div> 
                    <TypeWriter
                        options={{
                            strings:[
                                "Frontend Developer",
                                "UI/UX Designer"
                            ],
                            changeDelay:3,
                            changeDeleteSpeed:2,
                            autostart:true,
                            loop:true,
                        }}
                    />
                    </div>
                    <div>
                    Frontend Web Developer
                    </div>
                    </div>
                     
                    </h4>
                </div>
                <div className=' bg-[#ff4D41] h-[2px] w-[40px]'></div>
                <div>
                    <p>In a professional context it often happens that private clients order a publication to be made</p>
                    <Button link="#" text="Learn More"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
