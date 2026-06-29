import React from "react";

const RightBar = () => {
  return (
    <div className="w-[32%] bg-[#d9d9d9] p-10">
      <h1 className="text-4xl font-bold mb-14">
        Book a Session
      </h1>

      <div className="space-y-10">
        <div>
          <h3 className="font-semibold text-3xl mb-3">Date</h3>
          <div className="bg-white p-3 text-3xl italic">
            20 May 2026
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-3xl mb-3">Time</h3>
          <div className="bg-white p-3 text-3xl italic">
            7:00 PM - 8:00 PM
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-3xl mb-3">Duration</h3>
          <div className="bg-white p-3 text-3xl italic">
            1 Hour
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-3xl mb-3">Price</h3>
          <p className="text-3xl italic font-semibold">
            $240/hour
          </p>
        </div>

        <button className="bg-[#3137d1] text-white rounded-full px-10 py-4 text-2xl mt-8 cursor-pointer hover:bg-[#2629a8] transition-colors">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default RightBar;