export default function LoadingOverlay({ loading }) {
  if (!loading) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-10 text-center shadow-2xl w-96">
            <div className="w-20 h-20 mx-auto border-8 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <h2 className="text-2xl font-bold mt-6">
                🎡 Mengacak Kelompok...
            </h2>
            <p className="text-gray-500 mt-3">
                Mohon tunggu sebentar...
            </p>
        </div>
    </div>
  );
}