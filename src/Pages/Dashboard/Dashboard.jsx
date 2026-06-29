import Sidebar from "./Sidebar";
import Header from "./Header";
import StatCard from "./StatCard";
import ProgressSection from "./ProgressSection";
import UpcomingSessions from "./UpcomingSessions";
import QuoteCard from "./QuoteCard";

import {
  CalendarDays,
  Lightbulb,
  CircleCheckBig,
  FileText,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-200 flex">
      <Sidebar />

      <div className="flex-1 p-6">
        <Header />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          <StatCard
            title="Upcoming Sessions"
            value="3"
            icon={<CalendarDays size={30} />}
          />

          <StatCard
            title="Learning Skills"
            value="4"
            icon={<Lightbulb size={30} />}
          />

          <StatCard
            title="Completed Sessions"
            value="12"
            icon={<CircleCheckBig size={30} />}
          />

          <StatCard
            title="Certificates"
            value="2"
            icon={<FileText size={30} />}
          />
        </div>

        {/* Progress + Sessions */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <ProgressSection />
          <UpcomingSessions />
        </div>

        <QuoteCard />
      </div>


      {/* need some peace now man  */}
    </div>
  );
}