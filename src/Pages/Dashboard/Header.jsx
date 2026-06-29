import { Bell } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-4xl font-bold">
          Welcome back, Bikram 👋
        </h1>

        <p className="text-gray-600 mt-2 text-xl">
          Keep learning and growing !
        </p>

        <div className="w-36 h-1 bg-indigo-600 rounded-full mt-3"></div>
      </div>

      <div className="flex items-center gap-8">
        <Bell className="text-indigo-600" size={35} />
{/* damn this is stressfull */}
        <img
          src="boy.jpg"
          alt=""
          className="w-16 h-16 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
}