import { Sparkles, X } from "lucide-react";

export default function SpinOverlay({ loading, onClose }) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">

      <div className="relative bg-white rounded-3xl w-[420px] p-10 text-center shadow-2xl">

        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition flex items-center justify-center"
        >
          <X size={20} />
        </button>

        <div className="relative mx-auto w-40 h-40">

          <div className="absolute inset-0 rounded-full border-[10px] border-blue-500 border-t-transparent animate-spin"></div>

          <div
            className="absolute inset-4 rounded-full border-[10px] border-purple-500 border-b-transparent animate-spin"
            style={{
              animationDirection: "reverse",
              animationDuration: "2s",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles
              size={45}
              className="text-yellow-500 animate-pulse"
            />
          </div>

        </div>

        <h2 className="text-3xl font-bold mt-8">
          🎡 Sedang Mengacak...
        </h2>

        <p className="text-gray-500 mt-3">
          Mohon tunggu sebentar
        </p>

        <div className="w-full bg-gray-200 rounded-full h-3 mt-8 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 animate-pulse w-full"></div>
        </div>

      </div>

    </div>
  );
}