"use client";

import { useThemeContext } from "@/context/ThemeContext";

export default function PengalamanSection() {
  const { theme } = useThemeContext();

  const pengalaman = [
    {
      title: "Kampus Mengajar Angkatan 7",
      company: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
      date: "26 Februari 2024 – 16 Juni 2024",
      description:
        "Mengikuti Program Kampus Mengajar Angkatan 7 sebagai bagian dari implementasi Merdeka Belajar Kampus Merdeka (MBKM). Berkontribusi dalam membantu proses pembelajaran, administrasi sekolah, serta mendukung adaptasi teknologi di lingkungan pendidikan guna meningkatkan efektivitas kegiatan belajar mengajar.",
    },
    {
      title: "Staf IT Program PKBI Lampung",
      company: "Program Magang HUB Kemenaker Batch 3",
      date: "16 Desember 2025 – 15 Juni 2026",
      description:
        "Mengikuti Program Magang HUB Kemenaker Batch 3 sebagai Staf IT Program PKBI Lampung di Perkumpulan Keluarga Berencana Indonesia (PKBI) Lampung. Bertanggung jawab dalam pengelolaan CMS website, pembaruan konten, monitoring server, backup data, pemeliharaan keamanan website, optimasi performa, dukungan teknis tim redaksi, pengembangan fitur, pengelolaan struktur konten, serta analisis trafik website untuk mendukung kebutuhan digital organisasi.",
    },
  ];

  return (
    <section
      id="pengalaman"
      className={`relative overflow-hidden px-6 md:px-10 lg:px-20 py-24 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#050B24]" : "bg-slate-100"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* HEADER */}
      <div className="text-center mb-16 relative z-10">
        <span className="inline-block px-5 py-2 rounded-full bg-purple-600/20 text-purple-400 border border-purple-500/20 text-sm font-medium">
          Experiences
        </span>

        <h2
          className={`text-3xl md:text-4xl font-bold mt-5 ${
            theme === "dark" ? "text-white" : "text-slate-800"
          }`}
        >
          Pengalaman Saya
        </h2>
      </div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2 gap-14 items-center relative z-10">
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center order-2 lg:order-1">
          {/* Glow */}
          <div className="absolute w-[300px] md:w-[380px] h-[300px] md:h-[380px] bg-purple-600/20 blur-[90px] rounded-full"></div>

          {/* Floating Computer */}
          <div className="relative z-10 animate-float">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt="Computer Illustration"
              className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px] drop-shadow-[0_0_60px_rgba(168,85,247,0.35)]"
            />
          </div>

          {/* Floating Effects */}
          <div className="absolute top-14 left-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>

          <div className="absolute bottom-16 right-10 w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6 order-1 lg:order-2">
          {pengalaman.map((item, index) => (
            <div
              key={index}
              className={`rounded-[28px] border p-6 md:p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${
                theme === "dark"
                  ? "bg-slate-900/50 border-purple-500/20"
                  : "bg-white border-slate-200"
              }`}
            >
              {/* DATE */}
              <p className="text-cyan-400 font-semibold text-sm md:text-base">
                {item.date}
              </p>

              {/* TITLE */}
              <h3
                className={`text-xl md:text-2xl font-bold mt-2 ${
                  theme === "dark"
                    ? "text-white"
                    : "text-slate-800"
                }`}
              >
                {item.title}
              </h3>

              {/* COMPANY */}
              <p className="text-purple-400 mt-2 mb-4 font-medium">
                {item.company}
              </p>

              {/* DESCRIPTION */}
              <p
                className={`leading-8 text-justify text-sm md:text-base ${
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}