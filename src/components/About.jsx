import React from 'react'

const About = () => {
  return (
    <div className='w-full py-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className=' text-3xl font-[Neue_Montreal] tracking-tight '>
      Ochi is a strategic presentation agency for 
      forward-thinking businesses that need to raise funds,
      sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.

      </h1>
      <div className='w-full flex gap-5 mt-20 pt-10 border-t-[1px] border-[#7e9529]'>
        <div className='w-1/2 '>
        <h1 className='text-6xl'>
        Our approach :
        </h1>
        <button className='flex gap-10 items-center  px-10 py-4 bg-zinc-900 mt-10 rounded-full text-white'>
          READ MORE
          <div className='w-2 h-2 bg-zinc-100 rounded-full'>

          </div>
        </button>
         </div>
         <div className='w-1/2 h-[70vh] rounded-3xl bg-[#7e981c] '>

         </div>
      </div>
    </div>
  )
}

export default About
