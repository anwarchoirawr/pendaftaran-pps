import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Menggunakan Swiper dan SwiperSlide
import "swiper/css"; // Gaya dasar Swiper
import "swiper/css/navigation"; // Jika menggunakan navigasi
import "swiper/css/pagination"; // Jika menggunakan pagination
import brosurImage1 from "/src/assets/brosurpps1.jpg";
import brosurImage2 from "/src/assets/brosurpps2.jpg";
import ImageModal from "./ImageModal";

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
      <h3 className="text-center text-5xl font-bold mb-10">PPDB</h3>
      <p className="text-center text-2xl font-bold mb-10">Tahun Ajaran 2025/2026</p>
      <h1 className="text-center text-5xl font-bold mb-10 underline">Sudah Dibuka</h1>

      <section className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Container Brosur Pendaftaran */}
        <div className="w-full md:w-1/2 lg:w-1/2 shadow-lg rounded-lg overflow-hidden bg-white dark:bg-slate-800 mb-8 md:mb-0">
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-4">Brosur Pendaftaran</h2>
            <Swiper spaceBetween={10} slidesPerView={1}>
              <SwiperSlide>
                <img
                  src={brosurImage1}
                  alt="Brosur Pendaftaran 1"
                  className="w-full h-auto object-cover rounded-md cursor-pointer"
                  onClick={() => openModal(brosurImage1)}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={brosurImage2}
                  alt="Brosur Pendaftaran 2"
                  className="w-full h-auto object-cover rounded-md cursor-pointer"
                  onClick={() => openModal(brosurImage2)}
                />
              </SwiperSlide>
            </Swiper>
            {/* Tombol Daftar */}
            <a
              href="https://forms.gle/BoeLK29RSLsZjQ7XA"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-green-500 text-white px-6 py-2 rounded-md text-center text-2xl"
            >
              Daftar SMP!
            </a>
            <a
              href="https://forms.gle/8DQuny3FH3oodHAS8"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-blue-500 text-white px-6 py-2 rounded-md text-center text-2xl"
            >
              Daftar SMA!
            </a>
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
          <p className="text-2xl">Pendaftaran dapat dilakukan dengan mengisi formulir online melalui website kami atau datang langsung ke pesantren.</p>
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
          <p>Untuk pendaftaran online, ikuti langkah-langkah berikut: 1. Pilih Jenjang. 2. Registrasi & Input Berkas.
            {/* <Link
              to="/tonton-video"
              className="block mt-4 flex items-center bg-red-500 text-white px-6 py-2 rounded-md text-center text-2xl"
            >
              <PlayIcon className="w-6 h-6 mr-2" />
              TONTON LENGKAP CARA PENDAFTARAN ONLINE
            </Link> */}
          </p>
        </div>
      )}
    </div>

    {/* Syarat Pendaftaran */}
    <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
      <button
        className="w-full bg-blue-500 text-white text-center px-4 py-2 text-left rounded-md focus:outline-none"
        onClick={() => handleToggle(2)}
      >
        Syarat Pendaftaran
      </button>
      {activeIndex === 2 && (
        <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
          <p>1. Putra. 2. Sehat jasmani dan rohani. 3. Lancar membaca Al Qur'an. 4. Mendapatkan izin ortu/wali. 5. Surat Ket Bebas TBC & Hepatitis B. 6.Khusus Ulya memiliki hafalan minimal 2 juz.</p>
        </div>
      )}
    </div>

    {/* Biaya Pendaftaran */}
    <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
      <button
        className="w-full bg-blue-500 text-white text-center px-4 py-2 text-left rounded-md focus:outline-none"
        onClick={() => handleToggle(3)}
      >
        Biaya Pendaftaran
      </button>
      {activeIndex === 3 && (
        <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
          <p>Biaya pendaftaran sebesar **Rp 350.000**.</p>
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
          <p>Gelombang 1 (12 Oktober 2024 - 31 Januari 2025), Gelombang 2 akan dibuka apabila kuota belum terpenuhi.</p>
        </div>
      )}
    </div>

    {/* Materi Tes/Ujian */}
    <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
      <button
        className="w-full text-center bg-blue-500 text-white px-4 py-2 text-left rounded-md focus:outline-none"
        onClick={() => handleToggle(5)}
      >
        Materi Tes/Ujian
      </button>
      {activeIndex === 5 && (
        <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
          <p>1.Tes Tahfidz, 2. Tes wawancara calon Santri, 3. Tes Wawancara calon Wali Santri</p>
        </div>
      )}
    </div>

    {/* Jadwal Tes/Ujian */}
    <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
      <button
        className="w-full text-center bg-blue-500 text-white px-4 py-2 text-left rounded-md focus:outline-none"
        onClick={() => handleToggle(6)}
      >
        Jadwal Tes/Ujian
      </button>
      {activeIndex === 6 && (
        <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
          <p>Tes menggunakan sistem <b>Weekly Hybrid Testing System</b>. Jika Anda mendaftar pada pekan ini, tes akan dilaksanakan pada hari Sabtu di pekan yang sama. Admin akan mengirimkan jadwal tes melalui WhatsApp.</p>
        </div>
      )}
    </div>

    {/* Pengumuman */}
    <div className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-3 rounded-md shadow-lg">
      <button
        className="w-full text-center bg-blue-500 text-white px-4 py-2 text-left rounded-md focus:outline-none"
        onClick={() => handleToggle(7)}
      >
        Pengumuman
      </button>
      {activeIndex === 7 && (
        <div className="bg-gray-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 p-2 rounded-md mt-2 max-h-32 overflow-y-auto">
          <p>Pengumuman hasil tes akan diumumkan 10 hari setelah tes dan diinformasikan melalui WhatsApp yang terdaftar serta Website kami.</p>
        </div>
      )}
    </div>
  </div>
</div>  
      </section>

      {/* Modal Gambar */}
      <ImageModal isOpen={isModalOpen} onClose={closeModal} imageSrc={modalImage} />
    </main>
  );
};

export default Pendaftaran;
