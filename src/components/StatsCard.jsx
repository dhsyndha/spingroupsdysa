export default function StatsCard({
  students,
  topics,
  groups,
}) {
  return (
    <div className="grid md:grid-cols-3 gap-5 mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-gray-500">
                Total Peserta
            </p>
            <h2 className="text-4xl font-bold text-blue-600 mt-2">
                {students}
            </h2>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-gray-500">
                Total Materi
            </p>
            <h2 className="text-4xl font-bold text-green-600 mt-2">
                {topics}
            </h2>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-gray-500">
                Jumlah Kelompok
            </p>
            <h2 className="text-4xl font-bold text-purple-600 mt-2">
                {groups}
            </h2>
        </div>
    </div>
  );
}