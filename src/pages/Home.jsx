import { useRef, useState } from "react";
import toast from "react-hot-toast";
import Header from "../components/Header";
import InputPanel from "../components/InputPanel";
import ActionBar from "../components/ActionBar";
import ResultCard from "../components/ResultCard";
import SpinOverlay from "../components/SpinOverlay";
import StatsCard from "../components/StatsCard";
import { generateGroups } from "../utils/spinGenerator";

export default function Home() {
  const [students, setStudents] = useState("");
  const [topics, setTopics] = useState("");
  const [groups, setGroups] = useState();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  const totalStudents = students
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean).length;

  const totalTopics = topics
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean).length;

function handleSpin() {
    const totalGroups = Number(groups)
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);

  const topicList = topics
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);

  if (studentList.length === 0) {
    toast.error("👥 Masukkan daftar peserta terlebih dahulu.");
    return;
  }

  if (topicList.length === 0) {
    toast.error("📚 Masukkan daftar materi terlebih dahulu.");
    return;
  }

  if (!totalGroups || totalGroups <= 0) {
    toast.error("👥 Masukkan jumlah kelompok.");
    return;
  }

  setLoading(true);

  timeoutRef.current = setTimeout(() => {
    const data = generateGroups(
    studentList,
    topicList,
    totalGroups
  );

    setResults(data);
    setLoading(false);
    toast.success("🎉 Kelompok berhasil dibuat!");
  }, 2500);
}
function handleCancelSpin() {
  clearTimeout(timeoutRef.current);
  setLoading(false);
}
  function handleReset() {
    setStudents("");
    setTopics("");
    setResults([]);
    setGroups();
  }

  function exportResult() {
  let text = "HASIL PEMBAGIAN KELOMPOK\n\n";

  results.forEach((group) => {
    text += `Kelompok ${group.id}\n`;
    text += `Materi : ${group.topic}\n\n`;

    group.members.forEach((member) => {
      text += `- ${member}\n`;
    });

    text += "\n-------------------------\n\n";
    });

    const blob = new Blob([text], {
        type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "hasil-kelompok.txt";
    a.click();
    toast.success("📥 Hasil berhasil diunduh.");

    URL.revokeObjectURL(url);
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 py-10 px-5">

      <SpinOverlay
        loading={loading}
        onClose={handleCancelSpin}
        />

      <div className="max-w-7xl mx-auto">

        <Header />
        <StatsCard
          students={totalStudents}
          topics={totalTopics}
          groups={groups}
        />
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mt-8">
          <InputPanel
            students={students}
            setStudents={setStudents}
            topics={topics}
            setTopics={setTopics}
          />
          <ActionBar
            groups={groups}
            setGroups={setGroups}
            onSpin={handleSpin}
            onReset={handleReset}
          />
        </div>
        {results.length > 0 && (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
      {results.map((group) => (
        <ResultCard
          key={group.id}
          group={group}
        />
      ))}
    </div>

    <div className="flex justify-center gap-4 mt-10">

      <button
        onClick={handleSpin}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition"
      >
        🔄 Acak Lagi
      </button>
      <button
        onClick={exportResult}
        className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition">
        📥 Export Hasil
      </button>

    </div>
  </>
)}
      </div>
    </div>
  );
}
