"use client";

import { GraduationCap, Briefcase } from "lucide-react";
import { useThemeContext } from "@/context/ThemeContext";

export default function PendidikanSection() {
  const { theme } = useThemeContext();

  return (
    <section
      id="pendidikan"
      className={`relative overflow-hidden py-24 px-6 lg:px-20 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#050B24]"
          : "bg-slate-100"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* TITLE */}
      <div className="text-center mb-16 relative z-10">
        <span className="inline-block px-5 py-2 rounded-full bg-purple-600/20 text-purple-400 border border-purple-500/20 text-sm font-medium">
          Education
        </span>

        <h2
          className={`text-4xl font-bold mt-3 ${
            theme === "dark"
              ? "text-white"
              : "text-slate-800"
          }`}
        >
          Pendidikan & Organisasi
        </h2>
      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center order-2 lg:order-1">

          {/* Glow */}
          <div className="absolute w-[300px] md:w-[380px] h-[300px] md:h-[380px] bg-cyan-500/20 blur-[90px] rounded-full"></div>

          {/* Floating Education Image */}
          <div className="relative z-10 animate-float">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="Education Illustration"
              className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px] drop-shadow-[0_0_60px_rgba(34,211,238,0.35)]"
            />
          </div>

          {/* Floating Effects */}
          <div className="absolute top-14 left-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>

          <div className="absolute bottom-16 right-10 w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8 order-1 lg:order-2">

          {/* PENDIDIKAN */}
          <div
            className={`rounded-3xl p-8 border shadow-xl ${
              theme === "dark"
                ? "bg-slate-900/50 border-slate-800"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-cyan-500/20">
                <GraduationCap
                  className="text-cyan-400"
                  size={28}
                />
              </div>

              <h3
                className={`text-2xl font-bold ${
                  theme === "dark"
                    ? "text-white"
                    : "text-slate-800"
                }`}
              >
                Pendidikan
              </h3>
            </div>

            <div className="relative border-l-2 border-cyan-500 pl-6">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-500"></div>

              <h4
                className={`text-xl font-semibold ${
                  theme === "dark"
                    ? "text-white"
                    : "text-slate-800"
                }`}
              >
                Universitas Teknokrat Indonesia
              </h4>

              <span className="text-cyan-400 text-sm font-medium">
                Sep 2021 – Des 2024
              </span>

              <p
                className={`mt-2 ${
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                S1 Informatika
              </p>
            </div>
          </div>

          {/* ORGANISASI */}
          <div
            className={`rounded-3xl p-8 border shadow-xl ${
              theme === "dark"
                ? "bg-slate-900/50 border-slate-800"
                : "bg-white border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-purple-500/20">
                <Briefcase
                  className="text-purple-400"
                  size={28}
                />
              </div>

              <h3
                className={`text-2xl font-bold ${
                  theme === "dark"
                    ? "text-white"
                    : "text-slate-800"
                }`}
              >
                Pengalaman Organisasi
              </h3>
            </div>

            <div className="space-y-8">
              {/* ITEM 1 */}
              <div className="relative border-l-2 border-purple-500 pl-6">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-500"></div>

                <h4 className="text-lg font-semibold">
                  UKM Duta Kampus Teknokrat
                </h4>

                <span className="text-purple-400 text-sm">
                  Okt 2022 – Sep 2023
                </span>
              </div>

              {/* ITEM 2 */}
              <div className="relative border-l-2 border-purple-500 pl-6">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-500"></div>

                <h4 className="text-lg font-semibold">
                  Himpunan Mahasiswa Informatika
                </h4>

                <span className="text-purple-400 text-sm">
                  Jan 2024 – Jan 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}