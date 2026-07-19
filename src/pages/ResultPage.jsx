import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { searchReference } from "../utils/searchReference";

export default function ResultPage() {
  const { id } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function load() {
  const snap = await getDoc(doc(db, "results", id));

  console.log("Ada dokumen:", snap.exists());

  if (snap.exists()) {
    console.log("Data Firestore:", snap.data());
    setResults(snap.data().results);
  }
}

    load();
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          🎓 Hasil Pembagian Kelompok
        </h1>

        {results.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-xl shadow p-6 mb-6"
          >
            <h2 className="text-2xl font-bold">
              Kelompok {group.id}
            </h2>

            <p className="mt-2 text-blue-600 font-semibold">
              📚 {group.topic}
            </p>

            <div className="mt-4">
              {group.members.map((m, i) => (
                <p key={i}>
                  {i + 1}. {m}
                </p>
              ))}
            </div>

            <div className="mt-6 border-t pt-4">
              <h3 className="font-bold mb-3">
                📖 Referensi
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {searchReference(group.topic).map((ref) => (
                  <a
                    key={ref.name}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 text-center transition"
                  >
                    {ref.icon} {ref.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}