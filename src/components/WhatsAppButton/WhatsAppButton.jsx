import React from 'react';

const WhatsAppButton = () => {
  const whatsappNumber = "628123456789"; // Ganti dengan nomor admin
  
  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-2">
      {/* Teks Hubungi Kami */}
      <div className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md text-sm font-semibold hover:bg-gray-100 transition">
        Hubungi Kami
      </div>
      {/* Tombol WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        aria-label="Chat Admin"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 0C5.383 0 0 5.373 0 12c0 2.121.555 4.176 1.61 6.015L0 24l5.13-1.57C6.91 23.466 9.456 24 12 24c6.617 0 12-5.373 12-12S18.617 0 12 0zm0 21.82c-2.344 0-4.65-.713-6.605-2.047l-.472-.312-3.047.928.96-2.888-.31-.479C2.67 16.706 2 14.374 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm4.546-7.264l-1.764-.79a1.042 1.042 0 00-1.045.136l-.52.425a6.476 6.476 0 01-3.112-3.112l.425-.52a1.042 1.042 0 00.137-1.045l-.79-1.764a1.045 1.045 0 00-1.186-.589l-1.023.256c-.429.108-.78.407-.926.817-.445 1.234-.172 2.73.764 4.364a9.49 9.49 0 004.116 4.117c1.633.936 3.129 1.208 4.364.764.41-.146.709-.497.817-.926l.256-1.023a1.045 1.045 0 00-.589-1.186z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
