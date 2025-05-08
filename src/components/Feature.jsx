import { motion, useAnimate, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap";

const Feature = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div data-scroll data-scroll-section className=" relative w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue_montreal"] tracking-tight'>
          Featured Projects{" "}
        </h1>
      </div>
      <div className="px-20">
        <div className="cards flex w-full gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card_container relative  w-1/2 h-[75vh] "
          >
            <h1 className="absolute text-[#cdea68] flex overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-['Founders_Grotesk'] text-8xl leading-none tracking-tighter">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card_container relative  w-1/2 h-[75vh] "
          >
            <h1 className="absolute text-[#cdea68] flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-['Founders_Grotesk'] text-8xl leading-none tracking-tighter">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
