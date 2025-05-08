import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen px-32 bg-zinc-900 flex items-center gap-5">
      <div className="card_container h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center  w-full h-full rounded-xl bg-[#004d43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
            &copy;2019{" "}
          </button>
        </div>
      </div>
      <div className="card_container flex gap-5 h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
            &copy;2019{" "}
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
            &copy;2019{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
