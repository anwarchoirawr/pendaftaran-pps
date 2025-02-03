import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import walisantriImage from '/src/assets/walisantri.png'; // Import gambar

const Testimoni = () => {
  const testimonies = [
    {
      video: "https://www.youtube.com/embed/D97qywHp6RU", // URL video embed
      name: "Radifan Hawari (Angkatan 1)",
      text: "Mahasiswa Turki",
    },
    {
      video: "https://www.youtube.com/embed/WhLAQGWQjuE", // URL video embed
      name: "Jundil Islam (Angkatan 1)",
      text: "Mahasiswa King khalid University",
    },
    {
      video: "https://www.youtube.com/embed/7ZSfXWvRB7k", // URL video embed
      name: "Ibnu Taimiyah (Angkatan 2)",
      text: "Mahasiswa Universitas Islam Madinah",
    },
    {
      image: walisantriImage, // Menggunakan import untuk gambar lokal
      name: "Wali Santri Angkatan 12",
      text: "Alhamdulillah rekomended sekali anak saya pun mondok disitu",
    },
  ];

  return (
    <section className="container mx-auto py-8 px-4">
      <h2 className="text-center text-3xl font-bold mb-6 underline">Sapa Alumni</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {testimonies.map((testimony, index) => (
          <SwiperSlide
            key={index}
            className={`flex justify-center ${index % 2 === 0 ? 'animate-flip-left' : 'animate-flip-right'}`}
          >
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg max-w-xs text-center min-h-[250px]">
              {testimony.video ? (
                <div className="w-full h-48 mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src={testimony.video}
                    title={testimony.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="w-full h-48 mb-4">
                  <img
                    src={testimony.image}
                    alt={testimony.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{testimony.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {testimony.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimoni;