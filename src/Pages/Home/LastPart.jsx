import React from "react";
import {
  Group,
  GraduationCap,
  Users,
  Star,
  User,
  UserRound,
  UsersRound,
} from "lucide-react";
import HomeCard from "./HomeCard";

const popularSkills = [
  "coding.jpg",
  "uiux.jpg",
  "graphicDesign.webp",
  "micing.jpg",
  "videoEditing.jpg",
];

const whySkillBridge = [
  { img: "learnFromStudent.jpg", label: "Learn from Student" },
  { img: "teachAndLearn.png", label: "Teach and Learn" },
  { img: "flexibleLearning.jpg", label: "Flexible Learning" },
  { img: "trust.png", label: "Trust" },
  { img: "resources.jpg", label: "Various Resources" },
];

const cards = [
  {
    icon: (
      <GraduationCap strokeWidth={2} size={30} className=" w-10 text-bold" />
    ),
    count: +500,
    type: "skills",
  },
  {
    icon: <Users strokeWidth={2} size={30} className=" w-10 text-bold" />,
    count: +1000,
    type: "Members",
  },
  {
    icon: <UsersRound strokeWidth={2} size={30} className=" w-10 text-bold" />,
    count: +5000,
    type: "Students",
  },
  {
    icon: <Star strokeWidth={2} size={30} className=" w-10 text-bold" />,
    count: "98%",
    type: "Satisfaction",
  },
];

const LastPart = () => {
  return (
    <div className="px-8">
      <div className=" w-full justify-evenly rounded-2xl flex gap-3 items-center bg-neutral-300 theme-color">
        {cards.map((c) => {
          return <HomeCard icon={c.icon} count={c.count} type={c.type} />;
        })}
      </div>
      <h1 className="text-2xl font-bold theme-color  text-center  m-3">
        Popular Skills
      </h1>
      <div>
        <div className="flex justify-between px-6">
          {popularSkills.map((url) => (
            <img
              key={url}
              src={url}
              className="w-20  bg-neutral-300 p-2 border border-neutral-500 rounde-2xl h-20 object-cover"
            />
          ))}
        </div>
        <h1 className="text-2xl font-bold theme-color  text-center  m-3">
          Why SkillBridge?{" "}
        </h1>
        <div className="flex justify-between px-5 mb-8">
          {whySkillBridge.map((item) => (
            <div key={item.img} className="flex relative flex-col items-center">
              <img
                src={item.img}
                className="w-20  bg-neutral-300 p-2 border border-neutral-500 rounde-2xl h-20 object-cover"
              />
              <p className="text-sm  absolute -bottom-10 font-medium mt-2 theme-color">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastPart;
