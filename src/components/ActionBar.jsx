export default function ActionBar({
  groups,
  setGroups,
  onSpin,
  onReset,
}) {

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-8 border-t pt-8">
      <div>
        <label className="font-semibold block mb-2">
          👥 Jumlah Kelompok
        </label>

        <input
          type="number"
          min="0"
          value={groups}
          onChange={(e) => setGroups(Number(e.target.value))}
          className="w-40 border-2 border-slate-200 rounded-xl px-4 py-3 focus:border-blue-500 outline-none"/>
      </div>
      <div className="flex gap-4">
        <button
          onClick={onReset}
          className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition">
          🗑 Reset
        </button>

        <button
          onClick={onSpin}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transition">
          🎲 SPIN SEKARANG
        </button>
      </div>
    </div>
  );
}