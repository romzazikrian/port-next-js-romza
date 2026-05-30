"use client";

import Image from "next/image";
import { useThemeContext } from "@/context/ThemeContext";

export default function TentangSection() {
  const { theme } = useThemeContext();

  return (
    <section
      id="tentang"
      className={`relative px-8 lg:px-20 py-24 overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#050B24]"
          : "bg-slate-100"
      }`}
    >
      <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-3xl">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4 font-medium">
            WHO I AM?
          </p>

          <p
            className={`text-lg leading-[2] text-justify ${
              theme === "dark"
                ? "text-slate-300"
                : "text-slate-700"
            }`}
          >
            Saya merupakan lulusan Program Studi Informatika
            Universitas Teknokrat Indonesia yang siap memberikan
            kontribusi positif bagi perusahaan. Saya memiliki
            keterampilan dalam administrasi, pengolahan data,
            serta penguasaan Microsoft Office.
          </p>

          <p
            className={`text-lg leading-[2] mt-4 text-justify ${
              theme === "dark"
                ? "text-slate-300"
                : "text-slate-700"
            }`}
          >
            Berpengalaman dalam pengembangan website dan
            pengelolaan sistem berbasis teknologi, sehingga mampu
            mendukung proses digitalisasi administrasi.
            Terbiasa menyusun dokumentasi dan laporan,
            memiliki kemampuan komunikasi, kerja tim,
            serta manajemen waktu yang baik.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end relative">
          <div
            className={`relative w-[280px] h-[360px] rounded-2xl overflow-hidden shadow-2xl ${
              theme === "dark"
                ? "bg-slate-700"
                : "bg-slate-200"
            }`}
          >
            <Image
              src="/assets/romza.png"
              alt="M. Romza Zikrian"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* GARIS */}
          <div className="hidden lg:flex absolute -right-24 top-1/2 -translate-y-1/2 items-center gap-4">
            <div
              className={`w-[2px] h-40 ${
                theme === "dark"
                  ? "bg-purple-700"
                  : "bg-purple-400"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}