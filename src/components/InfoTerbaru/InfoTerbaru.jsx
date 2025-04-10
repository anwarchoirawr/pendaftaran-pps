import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import infoImage1 from "../../assets/terbaru/brosur.webp";
import infoVideo from "../../assets/terbaru/pondoktahfidjateng.mp4"; // Path ke video
import infoImage2 from "../../assets/terbaru/naskahkhutbah.webp"; // Ganti dengan gambar yang sesuai
import infoImage3 from "../../assets/terbaru/assestment-nasional.webp";

const InfoTerbaru = () => {
  const navigate = useNavigate();

  const infos = [
    { src: infoImage1, alt: "Info 1", description: "Penerimaan Santri Baru", additionalText: "Tahun ajaran 2025/2026", isRegistration: true },
    { src: infoImage2, alt: "Info 2", description: "Naskah Khutbah", additionalText: "Kumpulan naskah khutbah" },
    { src: infoImage3, alt: "Info 3", description: "Asesment Nasional", additionalText: "Jenjang Wustho" },
  ];

  const handleReadMore = (info) => {
    if (info.description === "Naskah Khutbah") {
      window.location.href = "https://ppsaalfurqon.ac.id/category/naskah-khutbah/";
    } else if (info.description === "Asesment Nasional") {
      window.location.href = "https://www.facebook.com/photo/?fbid=1049206699962766&set=a.139065727643539";
    } else if (info.isRegistration) {
      navigate("/pendaftaran");
    } else {
      navigate("/info");
    }
  };

  return (
    <main className="bg-white dark:bg-gray-900">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <h2 className="text-2xl font-bold text-center lg:text-left text-black dark:text-white md:text-4xl lg:text-5xl md:ml-10 mb-6 underline">
          Berita Terbaru
        </h2>
        <div className="p-3 md:p-10">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {infos.map((info, index) => (
              <SwiperSlide key={index} className="relative group">
                <div className="relative rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 transform group-hover:scale-105">
                  <div className="absolute top-0 right-0 m-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    New!
                  </div>
                  <img
                    src={info.src}
                    alt={info.alt}
                    className="rounded-t-lg w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {info.description}
                    </p>
                    {info.additionalText && (
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        {info.additionalText}
                      </p>
                    )}
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
                      onClick={() => handleReadMore(info)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide className="relative group">
              <div className="relative rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 transform group-hover:scale-105">
                <div className="absolute top-0 right-0 m-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  New!
                </div>
                <video
                  controls
                  className="w-full h-48 object-cover rounded-t-lg"
                  aria-label="Video kegiatan santri, momen kebersamaan"
                >
                  <source src={infoVideo} type="video/mp4" />
                  Browser Anda tidak mendukung tag video.
                </video>
                <div className="p-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Pondok Tahfidz Jawa Tengah
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Lembaga Pendidikan
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default InfoTerbaru;
