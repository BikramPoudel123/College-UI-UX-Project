export default function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white rounded-3xl p-5 flex items-center gap-4 shadow-sm">
      <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
}