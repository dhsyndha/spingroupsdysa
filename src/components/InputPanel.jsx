export default function InputPanel({
  students,
  setStudents,
  topics,
  setTopics,
}) {

  const totalStudents = students
    .split("\n")
    .filter((x) => x.trim() !== "").length;

  const totalTopics = topics
    .split("\n")
    .filter((x) => x.trim() !== "").length;

  return (

    <div className="grid lg:grid-cols-2 gap-8">

      <div>

        <div className="flex justify-between mb-2">

          <h2 className="font-bold text-lg">
            👥 Daftar Peserta
          </h2>

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            {totalStudents} Orang
          </span>

        </div>

        <textarea
          rows={14}
          value={students}
          onChange={(e) => setStudents(e.target.value)}
          placeholder="Contoh:

Andi
Budi
Citra
Doni"
          className="w-full rounded-2xl border-2 border-slate-200 p-5 resize-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
        />

      </div>

      <div>

        <div className="flex justify-between mb-2">

          <h2 className="font-bold text-lg">
            📚 Daftar Materi
          </h2>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {totalTopics} Materi
          </span>

        </div>

        <textarea
          rows={14}
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
          placeholder="Contoh:

React
Docker
Artificial Intelligence
Cloud Computing"
          className="w-full rounded-2xl border-2 border-slate-200 p-5 resize-none focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition"
        />

      </div>

    </div>

  );

}