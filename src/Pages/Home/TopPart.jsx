import React from "react";
import { Play } from "lucide-react";

const TopPart = () => {
  return (
    <div className="flex justify-between w-full px-10 py-5 h-100">
      <div className="flex flex-col  w-1/2 justify-center gap-10">
        <div className="text-[#312A2A] text-4xl font-bold ">
          <h1>Learn Tech</h1>
          <h1>
            Grow <span className="text-5xl text-[#4E4BAA]">Together</span>
          </h1>
        </div>
        <div className="text-2xl font-medium theme-color">
          <p>Join a community of students</p>
          <p>sharing knowledge and skill</p>
        </div>
        <div className="flex w-full gap-20">
          <button className=" hover:cursor-pointer  h-10 p-2 px-3 flex justify-center items-center rounded-full theme-bg text-white  text-2xl">
            Explore Skills
          </button>
          <button className=" hover:cursor-pointer  h-10 p-2 px-3 flex justify-center items-center rounded-full bg-neutral-300 border border-neutral-500  theme-color  text-2xl">
            Become a memeber <Play className="theme-color" />
          </button>
        </div>
      </div>
      <div>
        <img src="hero.png" alt="" />
      </div>
    </div>
  );
};

export default TopPart;
