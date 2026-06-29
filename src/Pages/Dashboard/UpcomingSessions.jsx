const sessions = [
  {
    title: "UI/UX Design with Baral Arikat",
    date: "2025/3/2 - 1 PM",
  },
  {
    title: "Video Editing with Nimal Khatri",
    date: "2026/6/7 - 3 PM",
  },
  {
    title: "React Basics with Bikram Nepal",
    date: "2026/8/7 - 7 AM",
  },
];

export default function UpcomingSessions() {
  return (
    <div className="bg-white rounded-3xl p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold">
          Upcoming Sessions
        </h2>

        <button className="text-indigo-600 font-semibold">
          View All
        </button>
      </div>

      <div className="mt-8 space-y-8">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="flex justify-between items-center"
          >
            <div>
              <h4 className="font-bold">
                {session.title}
              </h4>

              <p className="text-gray-600">
                {session.date}
              </p>
            </div>

            <img
              src="https://i.pravatar.cc/50?img=12"
              alt=""
              className="w-12 h-12 rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}