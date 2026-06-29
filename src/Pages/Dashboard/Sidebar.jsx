import {
  House,
  BookCopy,
  NotebookTabs,
  HandHelping,
  MessageSquareText,
  Settings,
  LogOut,
  ArrowBigLeft,
} from "lucide-react";

import { Link } from "react-router-dom";

const menus = [
  { icon: <House />, text: "Dashboard", active: true, id: "dashboard" },
  { icon: <BookCopy />, text: "My Bookings", id: "bookings" },
  { icon: <NotebookTabs />, text: "My Sessions", id: "sessions" },
  { icon: <HandHelping />, text: "My Skills", id: "skills" },
  { icon: <MessageSquareText />, text: "Messages", id: "messages" },
  { icon: <Settings />, text: "Settings", id: "settings" },
  { icon: <LogOut />, text: "Logout", id: "logout" },
  { icon: <ArrowBigLeft />, text: "Back", id: "back" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-gray-100 p-6">
      <div className="flex justify-center">
        <img
          src="boy.jpg"
          alt=""
          className="w-28 h-28 rounded-full object-cover cursor-pointer"
        />
      </div>

      <div className="mt-8 space-y-5">
        {menus.map((item) =>
          item.text == "Back" ? (
            <Link to={"/"} key={item.id}>
              <button
                className={`w-full flex items-center gap-4 p-4 rounded-2xl font-semibold text-xl transition cursor-pointer
              ${
                item.active
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-300 hover:bg-indigo-100"
              }`}
              >
                {item.icon}
                {item.text}
              </button>
            </Link>
          ) : (
            <button
              key={item.id}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl font-semibold text-xl transition cursor-pointer
              ${
                item.active
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-300 hover:bg-indigo-100"
              }`}
            >
              {item.icon}
              {item.text}
            </button>
          ),
        )}
      </div>
    </aside>
  );
}
