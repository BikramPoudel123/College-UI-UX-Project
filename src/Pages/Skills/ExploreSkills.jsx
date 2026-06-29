import React from "react";
import { Search } from "lucide-react";
import ExploreCard from "./ExploreCard";
import { exploreData } from "./exploreData";

const ExploreSkills = () => {
  return (
    <div className="w-full px-20">
      <div className="w-full">
        <h1 className="theme-color text-4xl  font-semibold mt-4">Explore Skills</h1>
        <p className="mb-5">Find mentor and learn new skills </p>
        <div className="input mb-5  flex p-2 rounded-2xl w-1/4 bg-neutral-100 border border-neutral-500">
          <Search />
          <input
            type="text"
            placeholder="search skills or mentors"
            className="flex-1  outline-none px-2"
          />
        </div>
        <div className="w-full cursor-pointer flex justify-between font-bold theme-color">
          <span>All</span>
          <span>Coding</span>
          <span>Design</span>
          <span>Public Speaking</span>
          <span>Marketing</span>
          <span>Buiness</span>
        </div>
      </div>

      <div className="grid grid-cols-3 w-full h-150">
        {exploreData.map((a) => {
          return (
            <ExploreCard
              key={a.id}
              img={a.img}
              review={a.review}
              star={a.star}
              name={a.name}
              skill = {a.skill}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreSkills;
