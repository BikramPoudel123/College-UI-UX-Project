const skills = [
  { name: "UI/UX Design", value: 79 },
  { name: "Video Editing", value: 60 },
  { name: "React Development", value: 10 },
];

export default function ProgressSection() {
  return (
    <div className="bg-white rounded-3xl p-6">
      <h2 className="text-4xl font-bold mb-8">
        Learning Progress
      </h2>

      <div className="space-y-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">
                {skill.name}
              </span>

              <span className="font-semibold text-indigo-600">
                {skill.value}%
              </span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div
                className="h-3 bg-indigo-600 rounded-full"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}