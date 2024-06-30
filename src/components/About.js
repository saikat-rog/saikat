import React from 'react'

const About = () => {
  const about = "Hello my name is Saikat Das i study CSE in UEM Kolkata";

  return (
    <div className='min-h-screen bg-deepdark pt-28 flex flex-col items-center font-inter'>
      <h1 className=' text-primarygreen text-5xl md:text-6xl font-semibold'>About</h1>
      <div
            className="bg-lightdark p-10 mt-16 rounded-sm flex items-start flex-col border-b-4 border-primarygreen w-96"
          >
            <div className="text-grey pt-5 text-start">{about}</div>
          </div>
      
    </div>
  )
}

export default About
