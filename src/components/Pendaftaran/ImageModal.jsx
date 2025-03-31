// ImageModal.jsx
import React, { useState } from "react";

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  const handleZoomToggle = (e) => {
    e.stopPropagation(); // Menghindari modal tertutup saat gambar diklik
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
      onClick={onClose} // Modal akan ditutup jika bagian luar gambar diklik
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()} // Cegah modal tertutup saat area dalam modal diklik
      >
        <img
          src={imageSrc}
          alt="Brosur"
          onClick={handleZoomToggle}
          className={`cursor-pointer transition-transform duration-300 ease-in-out ${isZoomed ? "scale-150" : "scale-100"}`}
          style={{
            width: isZoomed ? "auto" : "90vw", // Lebar sesuai zoom
            height: isZoomed ? "auto" : "80vh", // Tinggi sesuai zoom
            maxWidth: "100%", // Tidak melebihi viewport
            maxHeight: "100%", // Tidak melebihi viewport
            objectFit: "contain", // Agar gambar tetap proporsional
          }}
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ImageModal;




