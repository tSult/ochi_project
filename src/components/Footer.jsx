import React from "react";

const Footer = () => {
  return (
    <div className="flex gap-5  w-full h-screen bg-zinc-900 p-20 font-['Founders_Grotesk']">
      <div className='w-1/2 h-full flex flex-col justify-between '>
        <div className="heading">
          <h1 className="text-[8vw] font-semibold uppercase leading-none -mb-9">
            Eye-
          </h1>
          <h1 className="text-[8vw] font-semibold uppercase leading-none -mb-9">
            Opening
          </h1>
        </div>
      </div>
      <div className="w-1/2 ">
      <h1 className="text-[5vw] font-semibold uppercase leading-none -mb-10">
            Presentation
          </h1>
      </div>
    </div>
  );
};

export default Footer;
