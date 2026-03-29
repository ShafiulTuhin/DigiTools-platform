import React from "react";

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mb-[120px] lg:rounded-none rounded-lg">
      <div className=" max-w-[1200px] mx-auto  lg:py-[60px] py-10 grid grid-cols-3">
        <div className="lg:px-20 px-5 border-r-2 border-slate-200">
          <h2 className="font-extrabold lg:text-6xl text-2xl text-white">
            50K+
          </h2>
          <p className="lg:text-2xl text-white mt-[12px]">Active user</p>
        </div>
        <div className="lg:px-20 px-5 border-r-2 border-slate-200">
          <h2 className="font-extrabold lg:text-6xl text-2xl text-white">
            200+
          </h2>
          <p className="lg:text-2xl text-[13px] text-white mt-[12px]">
            Premium Tools
          </p>
        </div>
        <div className="lg:px-20 px-5 ">
          <h2 className="font-extrabold lg:text-6xl text-2xl text-white">
            4.9
          </h2>
          <p className="lg:text-2xl text-white mt-[12px]">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
