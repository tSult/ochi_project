import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    // <div className="w-full py-20 rounded-lg bg-[#004D43]">
    //   <div className="flex gap-10 overflow-hidden border-t-2 border-b-2 border-zinc-300 text whitespace-nowrap">
    //     <h1 className="text-[17vw] leading-none font-['Founders_Grotesk'] font-semibold uppercase pt-10 -mb-20 ">we are ochi </h1>
    //     <h1 className="text-[17vw] leading-none font-['Founders_Grotesk'] font-semibold uppercase pt-10 -mb-20">  we are ochi </h1>
    //   </div>
    // </div>

    <div
    data-scroll
    data-scroll-section
    data-scroll-speed=".1" 
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div
      
       className="flex gap-10 overflow-hidden border-y-2 border-zinc-300 whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[22vw] leading-none font-['Founders_Grotesk'] font-semibold uppercase py-10 "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[22vw] leading-none font-['Founders_Grotesk'] font-semibold uppercase py-10 "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
