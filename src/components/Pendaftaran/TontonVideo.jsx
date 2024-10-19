import React from "react";
import videoTutorial from "/src/assets/video/tutorialpendaftaran.mp4"; // Pastikan path video sudah benar

const TontonVideo = () => {
  const handleHubungiKami = () => {
    window.location.href = "https://wa.me/62895800086699"; // Ganti dengan nomor WhatsApp yang sesuai
  };

  return (
    <main className="bg-slate-100 dark:bg-slate-900 dark:text-white py-12 pt-40 mt-16">
      <h3 className="text-center text-5xl font-bold mb-10 underline">Video Tutorial Pendaftaran</h3>

      <section className="container mx-auto px-4">
        {/* Video Tutorial */}
        <div className="w-full max-w-3xl mx-auto">
          <video
            controls
            src={videoTutorial}
            className="w-full h-auto rounded-md shadow-lg max-w-full" // Tambahkan max-w-full untuk responsivitas
          />
        </div>

        {/* Tombol Hubungi Kami */}
        <div className="text-center mt-8">
          <button
            onClick={handleHubungiKami}
            className="bg-green-500 text-white px-6 py-2 rounded-md text-2xl hover:bg-green-600" // Tambahkan efek hover
          >
            Hubungi Kami
          </button>
        </div>
      </section>
    </main>
  );
};

export default TontonVideo;
