import React from "react";
import { Search, ArrowLeft } from "lucide-react";
import { users } from "./data";
import { Link } from "react-router-dom";

const LeftBar = () => {
  return (
    <div className="w-[28%] bg-[#f3f3f3] p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-5xl font-bold text-center mt-8 mb-10">Chats</h1>

        {/* Search */}
        <div className="bg-[#e8e2e2] rounded-full px-4 py-3 flex items-center gap-3 mb-6">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search chats..."
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Users */}
        <div className="space-y-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-[#e5dfdf] rounded-3xl p-3 flex items-center justify-between cursor-pointer hover:bg-[#d5cfcf] transition-colors"
            >
              <div className="flex gap-3 items-center">
                <img
                  src={user.image}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-medium">{user.name}</h3>

                  <p className="text-xs text-blue-600">{user.status}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm">{user.time}</p>

                {user.unread && (
                  <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center ml-auto mt-2 text-sm">
                    {user.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <Link to={"/"}>
        <button className="bg-[#d6d2d2] rounded-2xl py-4 flex justify-center items-center gap-3 w-[80%] mx-auto cursor-pointer hover:bg-[#c6c2c2] transition-colors">
          <ArrowLeft />
          <span className="font-semibold text-3xl">Back</span>
        </button>
      </Link>
    </div>
  );
};

export default LeftBar;
