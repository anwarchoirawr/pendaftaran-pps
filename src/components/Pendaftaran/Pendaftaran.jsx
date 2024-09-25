// Pendaftaran.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import brosurImage1 from "/src/assets/brosurpps.jpg";
import ImageModal from "./ImageModal";
import { PlayIcon } from '@heroicons/react/24/solid';

const Pendaftaran = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="bg-slate-100 dark:bg-slate-900 dark:text-white py-12 pt-40 mt-16 md:mb-50">
      {/* Judul Utama */}
      <h3 className="text-center text-5xl font-bold mb-10 ">Penerimaan Santri Baru</h3>
      <p className="text-center text-2xl font-bold mb-10 ">Tahun ajaran 2025/2026</p>
      <h1 className="text-center text-5xl font-bold mb-10 underline">Sudah Dibuka</h1>

      <section className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Container Brosur Pendaftaran */}
        <div className="w-full md:w-1/2 lg:w-1/2 shadow-lg rounded-lg overflow-hidden bg-white dark:bg-slate-800 mb-8 md:mb-0">
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-4">Brosur Pendaftaran</h2>
            {/* Gambar brosur */}
            <div className="mb-4">
              <img
                src={brosurImage1}
                alt="Brosur Pendaftaran"
                className="w-full h-auto object-cover rounded-md cursor-pointer"
                onClick={() => openModal(brosurImage1)}
              />
            </div>
            {/* Tombol Daftar SMP */}
            <a
              href="https://bit.ly/4gzC6a1"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-green-500 text-white px-6 py-2 rounded-md text-center text-2xl"
            >
              Daftar SMP!
            </a>
            {/* Tombol Daftar SMA */}
            <Link
              to="/formulir-sma"
              className="block mt-4 bg-yellow-500 text-white px-6 py-2 rounded-md text-center text-2xl"
            >
              Daftar SMA!
            </Link>
          </div>
        </div>

        {/* Akordeon */}
        <div className="w-full md:w-2/3 lg:w-2/3 max-w-4xl mx-auto">
          <div className="flex flex-col space-y-2">
            {/* Pendaftaran */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full bg-blue-500 text-white px-3 py-2 text-center rounded-md focus:outline-none"
                onClick={() => handleToggle(0)}
              >
                Pendaftaran
              </button>
              {activeIndex === 0 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p className="text-2xl">Pendaftaran bisa dilakukan dengan mengisi formulir online memalalui website kami atau datang langsung ke pesantren.</p>
                </div>
              )}
            </div>

            {/* Cara Pendaftaran */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full bg-blue-500 text-white text-center px-4 py-2 text-left rounded-md focus:outline-none"
                onClick={() => handleToggle(1)}
              >
                Cara Pendaftaran Online
              </button>
              {activeIndex === 1 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p>Untuk pendaftaran online, ikuti langkah-langkah berikut: 1. Pilih Jenjang. 2. Registrasi. 3. Input Berkas Emis. 
                  <Link
                    to="/tonton-video"
                    className="block mt-4 flex items-center bg-red-500 text-white px-6 py-2 rounded-md text-center text-2xl"
                  >
                    <PlayIcon className="w-6 h-6 mr-2" />
                    TONTON LENGKAP CARA PENDAFTARAN ONLINE
                  </Link></p>
                </div>
              )}
            </div>

            {/* Informasi Biaya */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full bg-blue-500 text-white text-center px-4 py-2 text-left rounded-md focus:outline-none"
                onClick={() => handleToggle(2)}
              >
                Informasi Biaya
              </button>
              {activeIndex === 2 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p>Biaya pendaftaran adalah Rp. 300.000. Biaya ini sudah termasuk ujian awal dan administrasi.</p>
                </div>
              )}
            </div>

            {/* Kuota */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full text-center bg-blue-500 text-white px-4 py-2 text-left rounded-md focus:outline-none"
                onClick={() => handleToggle(3)}
              >
                Kuota
              </button>
              {activeIndex === 3 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p>Kuota yang diterima adalah 60 siswa untuk setiap angkatan.</p>
                </div>
              )}
            </div>

            {/* Gelombang Pendaftaran */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full text-center bg-blue-500 text-white px-4 py-2 text-left rounded-md focus:outline-none"
                onClick={() => handleToggle(4)}
              >
                Gelombang Pendaftaran
              </button>
              {activeIndex === 4 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p>Gelombang pendaftaran terdiri dari 3 gelombang: Gelombang 1 (Januari - Maret), Gelombang 2 (April - Juni), Gelombang 3 (Juli - September).</p>
                </div>
              )}
            </div>

            {/* Ujian */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full text-center bg-blue-500 text-white px-4 py-2 text-left rounded-md focus:outline-none"
                onClick={() => handleToggle(5)}
              >
                Jadwal Ujian
              </button>
              {activeIndex === 5 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p>Jadwal ujian akan diinformasikan setelah pendaftaran ditutup.</p>
                </div>
              )}
            </div>

            {/* Pengumuman */}
            <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
              <button
                className="w-full text-center bg-blue-500 text-white px-4 py-2 text-left rounded-md focus:outline-none"
                onClick={() => handleToggle(6)}
              >
                Pengumuman
              </button>
              {activeIndex === 6 && (
                <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
                  <p>Pengumuman hasil ujian akan diinformasikan melalui website dan email yang terdaftar.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Image */}
      <ImageModal isOpen={isModalOpen} imageSrc={modalImage} onClose={closeModal} />

    </main>
  );
};

export default Pendaftaran;
