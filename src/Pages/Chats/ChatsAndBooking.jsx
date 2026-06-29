import React from "react";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import { messages, users } from "./data";

import { Phone, MoreVertical, Smile, Send } from "lucide-react";

const ChatsAndBooking = () => {
  return (
    <div className="h-screen bg-[#1f1f1f] p-1">
      <div className="h-full flex">
        {/* Left */}
        <LeftBar />

        {/* Center Chat */}
        <div className="w-[40%] bg-[#f2e8e8] flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex gap-3 items-center">
              <img
                src={users[0].image}
                alt=""
                className="w-14 h-14 object-cover rounded-full"
              />

              <div>
                <h2 className="text-3xl font-medium">Sophia Patel</h2>

                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span>Active</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-[#3137d1] cursor-pointer" />
              <MoreVertical className="cursor-pointer" />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-5 space-y-8">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "other" && (
                  <img
                    src={users[0].image}
                    alt=""
                    className="w-12 h-12  object-cover rounded-full mr-3"
                  />
                )}

                <div
                  className={`max-w-[70%] rounded-[30px] p-5 relative ${
                    msg.sender === "me"
                      ? "bg-[#3137d1] text-white"
                      : "bg-[#d9cfcf]"
                  }`}
                >
                  <p className="whitespace-pre-line text-xl">{msg.text}</p>

                  <span className="text-sm block text-right mt-2">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4">
            <div className="bg-[#e5dddd] rounded-full px-6 py-4 flex items-center">
              <input
                type="text"
                placeholder="....Start typing here...."
                className="bg-transparent outline-none flex-1"
              />

              <Smile className="mr-4 cursor-pointer" />
              <Send className="text-[#3137d1] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right */}
        <RightBar />
      </div>
    </div>
  );
};

export default ChatsAndBooking;
