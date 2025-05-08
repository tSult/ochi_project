import React from "react";

const Feature = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue_montreal"] tracking-tight'>
          Featured Projects{" "}
        </h1>
      </div>
       <div className="px-20">
       <div className="cards flex w-full mt-10">
        <div className="card_container relative  w-1/2 h-[75vh] ">
        <h1 className="absolute text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-['Founders_Grotesk'] text-8xl leading-none tracking-tighter">
        {"FYDE".split('').map((item,index)=><span className="">{item}</span>)}
        </h1>
        <div className="card w-full h-full rounded-xl overflow-hidden">
          <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="" />
        </div>
        </div>
        <div className="card_container relative rounded-xl w-1/2 h-[75vh] ">
        <h1 className="absolute text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-['Founders_Grotesk'] text-8xl leading-none tracking-tighter">
        {"VISE".split('').map((item,index)=><span className="">{item}</span>)}
        </h1>

        <div className="card w-full h-full rounded-xl overflow-hidden ">
          <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" alt="" />
        </div>
        </div>
      </div>
       </div>
    </div>
  );
};

export default Feature;
