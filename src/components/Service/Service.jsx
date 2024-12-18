import React from "react";
import CountUp from "react-countup";
import heroImage1 from "../../assets/servis/tahfidz.webp";
import heroImage2 from "../../assets/servis/mulazamah.webp";
import heroImage3 from "../../assets/servis/bahasa.webp";

const Service = () => {
  return (
    <section className="container mx-auto py-3 md:py-0 pt-0 sm:pt-4">
      <div className="mx-auto w-full bg-white p-4 shadow-lg dark:bg-gray-800 dark:text-white md:max-w-[800px]">
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:text-3xl md:text-4xl">
          Progam Kita
        </h2>
        <div className="grid grid-cols-2 divide-x divide-slate-700 dark:divide-gray-700 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center p-2">
            <img
              src={heroImage1}
              alt="tahfidz"
              loading="lazy" // Tambahkan lazy-loading di sini
              className="w-12 h-auto mb-2"
            />
            <h1 className="text-xs font-semibold text-center sm:text-md md:text-lg">
              Tahfidz & Sanad
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <img
              src={heroImage2}
              alt="Mulazamah"
              loading="lazy" // Tambahkan lazy-loading di sini
              className="w-12 h-auto mb-2"
            />
            <h1 className="text-xs font-semibold text-center sm:text-md md:text-lg">
              Mulazamah
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <img
              src={heroImage3}
              alt="Bahasa"
              loading="lazy" // Tambahkan lazy-loading di sini
              className="w-12 h-auto mb-2"
            />
            <h1 className="text-xs font-semibold text-center sm:text-md md:text-lg">
              Bahasa
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <h1 className="text-lg font-bold text-black/80 dark:text-white sm:text-xl md:text-3xl">
              <CountUp
                start={0}
                end={100}
                duration={2.75}
                separator=" "
                suffix="+"
              />
            </h1>
            <h1 className="text-xs font-semibold text-center sm:text-md md:text-lg">
              Alumni
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
