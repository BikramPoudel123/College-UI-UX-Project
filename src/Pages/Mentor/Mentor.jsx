import { useLocation } from "react-router-dom";
import { Clock, Users, Watch } from "lucide-react";

const Mentor = () => {
  const location = useLocation();
  const mentor = location.state?.mentor;

  return (
    <div className="px-5 my-5  ">
      {mentor ? (
        <div className="theme-bg text-white flex p-10  pl-20 gap-20  items-center rounded-3xl ">
          <img
            src={mentor.img}
            className="w-50 h-50 object-cover rounded-full "
            alt={mentor.name}
          />
          <div>
            <h1 className="text-4xl font-bold ">{mentor.name}</h1>
            <div className="text-neutral-300 font-semibold">
              <p>{mentor.skill}</p>
              <p>{mentor.review}</p>
              {/* Display mentor details */}
              <button className="px-3 py-2 bg-blue-500 my-5 mr-10  text-white rounded-full ">
                Book a sesson
              </button>
              <button className="px-3 py-2 bg-neutral-200 text-black  rounded-full ">
                Message
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>No mentor selected</p>
      )}

      <ul className="theme-color my-3  font-bold  flex gap-15">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Skill</li>
        <li className="cursor-pointer">{mentor.review}</li>
        <li className="cursor-pointer">About</li>
      </ul>

      <div className="mb-5">
        <h1 className="font-bold  text-neutral-700">About</h1>
        <p>Hi i am {mentor.name}. My Skill: <span className="font-bold text-neutral-600">  {mentor.skill} </span></p>
      </div>
      <div className=" flex gap-20">
        
        <div>
          <h1 className="text-2xl font-semibold theme-color ">Skills</h1>
          <div className="w-150 text-white grid grid-cols-3 gap-5">
            <p className="theme-bg p-2 rounded-2xl ">Figma</p>
            <p className="theme-bg p-2 rounded-2xl ">WireFraming</p>
            <p className="theme-bg p-2 rounded-2xl ">Coding</p>
            <p className="theme-bg p-2 rounded-2xl ">Prototyping</p>
            <p className="theme-bg p-2 rounded-2xl ">Content Writing</p>
          </div>
        </div>
        <div className="bg-neutral-300  ml-20 -mt-20 text-black p-5  w-150 rounded-3xl">
          <div className="flex gap-2 my-5 items-center font-semibold text-neutral-700">
            <Users color="blue" />
            <div>
              <p>Students taught</p>
              <p>320+</p>
            </div>
          </div>
          <div className="flex gap-2 my-5 items-center font-semibold text-neutral-700">
            <Watch color="blue" />
            <div>
              <p>Session Completed</p>
              <p>560+</p>
            </div>
          </div>
          <div className="flex gap-2 my-5 items-center font-semibold text-neutral-700">
            <Clock color="blue" />
            <div>
              <p>Response Rate</p>
              <p>95%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-neutral-700 px-2 my-3">Reviews</h1>
        <div className=" w-full bg-neutral-300 p-5 rounded-3xl h-20 ">
          <p className="text-red-300">Something went wrong to show reviews </p>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
