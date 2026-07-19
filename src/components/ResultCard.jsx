import { searchReference } from "../utils/searchReference";

const colors = [
  "from-blue-500 to-cyan-500",
  "from-green-500 to-emerald-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-red-500",
  "from-indigo-500 to-blue-500",
  "from-teal-500 to-green-500",
];

export default function ResultCard({ group }) {
  const color = colors[(group.id - 1) % colors.length];

  const references = searchReference(group.topic);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300">

      <div className={`bg-gradient-to-r ${color} p-5 text-white`}>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl">
            🎯 Kelompok {group.id}
          </h2>

          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
            {group.members.length} Orang
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-blue-600 font-bold text-lg">
            📚 {group.topic}
          </p>

          <div className="mt-4 border-t pt-4">
            <h4 className="font-semibold text-gray-700 mb-3">
              📖 Referensi
            </h4>

            <div className="grid grid-cols-2 gap-2">
              {references.map((ref) => (
                <a
                  key={ref.name}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 transition"
                >
                  <span>{ref.icon}</span>
                  <span>{ref.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="font-semibold mb-3">
            👥 Anggota
          </h3>
          <div className="space-y-2">
            {group.members.map((member, index) => (
              <div
                key={index}
                className="bg-slate-100 rounded-lg px-3 py-2 text-sm hover:bg-blue-100 duration-200">
                {index + 1}. {member}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}