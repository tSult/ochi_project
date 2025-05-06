import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

const LandingPage = () => {
  return (
    <div className='w-full h-screen pt-1 bg-zinc-900'>
      <div className='px-20 textstructure mt-52'>
       {["we create","eye-opening","presentations"].map((item,index)=>{
       return <div className='masker '>
       <div className='flex items-center w-fit'>
        {index === 1 && (<div className='mr-[1vw] w-[7.5vw] h-[5vw] relative  bg-red-500'></div>)}
       <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-["Founders_Grotesk"] font-medium'>{item} </h1>
       </div>
        </div>
       })}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-32  flex justify-between items-center py-5 px-20'>
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=><p className='font-light leading-none tracking-tight text-md'>{item}</p>)}


        {/* <div className= 'flex items-center gap-5 start ' >
        <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-sm capitalize rounded-full'>
          START THE PROJECT
            <div className='w-10 h-10 border-[2px] border-zinc-500    flex items-center justify-center rounded-full'> <span className='rotate-[45deg]'><FaArrowUpLong/></span> </div>
        </div>
      </div> */}

<div className="flex items-center gap-5">
  <div className="flex items-center gap-3 px-5 py-2 font-light capitalize border rounded-full text-md border-zinc-400">
    <span>START THE PROJECT</span>
    <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full border-zinc-500">
      <span className="rotate-45">
        <FaArrowUpLong />
      </span>
    </div>
  </div>
</div>

      </div>
      
    </div>
  )
}

export default LandingPage
