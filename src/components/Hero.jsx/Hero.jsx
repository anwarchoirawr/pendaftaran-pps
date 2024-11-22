import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage1 from "/src/assets/hero-pondok1.jpeg";
import heroImage2 from "/src/assets/hero-pondok2.jpg";
import heroImage3 from "/src/assets/hero-pondok3.jpeg";
import './typing-animation.css'; // Impor CSS dari folder yang sama

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isMobile, setIsMobile] = useState(false); // State untuk mendeteksi perangkat
  const navigate = useNavigate();
  
  const texts = [
    "Ahlan Wa Sahlan",
    "Di PPS AL-FURQON Magelang"
  ];
  
  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Periksa ukuran layar
    };

    const typeText = () => {
      if (textIndex < texts.length) {
        const text = texts[textIndex];
        setDisplayedText(text.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === text.length) {
          charIndex = 0;
          textIndex++;
          if (textIndex < texts.length) {
            setTimeout(() => {
              setDisplayedText("");
              typeText();
            }, 1000); // Delay antara teks
          }
        } else {
          setTimeout(typeText, 100); // Kecepatan mengetik
        }
      }
    };

    typeText();
    checkScreenSize(); // Deteksi ukuran layar pertama kali
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  
  const handleNavigate = () => {
    navigate('/'); // Pergi ke halaman utama
    setTimeout(() => {
      const element = document.getElementById('tentang-kami');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay singkat untuk memastikan halaman sudah sepenuhnya dimuat
  };

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative h-screen bg-black">
      {/* Slider Section */}
      <section className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="hero-slider flex w-[300%] h-full animate-slide">
          <div className="flex-shrink-0 w-full h-full">
            <img src={heroImage1} alt="Hero 1" className="w-full h-full object-cover" />
          </div>
          <div className="flex-shrink-0 w-full h-full">
            <img src={heroImage2} alt="Hero 2" className="w-full h-full object-cover" />
          </div>
          <div className="flex-shrink-0 w-full h-full">
            <img src={heroImage3} alt="Hero 3" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white bg-black bg-opacity-40 px-4">
        <div className="max-w-2xl w-full">
          <h1 className="text-5xl font-bold whitespace-normal overflow-hidden text-ellipsis typing-animation">
            {displayedText}
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-duration="600"
            className="mb-8 text-lg font-bold"
          >
            Terakreditasi A
          </h2>

          {/* Button Section */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleNavigate}
              className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-300"
            >
            Tentang Kami
            </button>
            <button
              onClick={() => navigate('/pendaftaran')}
              className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-600 transition-colors duration-300"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Scroll Button */}
      {isMobile && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-50">
          <button
            onClick={handleScroll}
            className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-600"
          >
            ↓
          </button>
          <span className="mt-2 text-white font-semibold text-sm">Scroll!</span>
        </div>
      )}

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          60% { transform: translateX(-100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-slide {
          animation: slide 24s infinite;
        }
        @media (max-width: 640px) {
          .text-5xl {
            font-size: 2.5rem; /* Menyesuaikan ukuran font untuk perangkat kecil */
          }
          .max-w-2xl {
            max-width: 90%; /* Mengatur lebar maksimum untuk perangkat kecil */
          }
        }
      `}</style>
    </main>
  );
};

export default Hero;
