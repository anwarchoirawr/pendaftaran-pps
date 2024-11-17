// components/Fasilitas.jsx
import React, { useState } from 'react';
import fasilitas1 from '../../assets/kantin.png';
import fasilitas2 from '../../assets/asrama.png';
import fasilitas3 from '../../assets/labkomputer.png';
import fasilitas4 from '../../assets/lapangan.png';
// import fasilitas5 from '../../assets/bahasa.png';
  
const Fasilitas = () => {
  const [selectedFasilitas, setSelectedFasilitas] = useState(null);

  const fasilitasList = [
    { src: fasilitas1, alt: 'Koperasi', description: 'Koperasi yang lengkap untuk penunjang kebutuhan harian.' },
    { src: fasilitas2, alt: 'Asrama', description: 'Asrama yang nyaman dan kondusif bagi santri.' },
    { src: fasilitas3, alt: 'Laboratorium', description: 'Laboratorium yang dilengkapi dengan fasilitas lengkap.' },
    { src: fasilitas4, alt: 'Lapangan Olahraga', description: 'Lapangan olahraga untuk berbagai kegiatan.' },
    // { src: fasilitas5, alt: 'Kantin', description: 'Kantin bersih dan menyediakan berbagai makanan sehat.' },
  ];

  const openModal = (fasilitas) => {
    setSelectedFasilitas(fasilitas);
  };

  const closeModal = () => {
    setSelectedFasilitas(null);
  };

  return (
    <main className="bg-gray-100 pt-16 pb-8">
      <section className="container py-8 md:py-12 mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 md:text-4xl lg:text-5xl mb-6 underline">
          Fasilitas Kami
        </h2>
        <div className="p-3 md:p-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:place-items-center">
            {fasilitasList.map((fasilitas, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openModal(fasilitas)}
              >
                <img
                  src={fasilitas.src}
                  alt={fasilitas.alt}
                  className="rounded-lg w-full h-auto object-cover sm:h-64 md:h-64 lg:h-64"
                  data-aos={`flip-${index % 2 === 0 ? "left" : "right"}`}
                  data-aos-duration="800"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-semibold mb-2">{fasilitas.alt}</h3>
                  <p className="text-white text-center text-sm px-4">{fasilitas.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedFasilitas && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedFasilitas.src}
              alt={selectedFasilitas.alt}
              className="max-w-full max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Fasilitas;
