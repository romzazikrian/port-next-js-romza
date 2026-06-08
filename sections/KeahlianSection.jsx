"use client";

import { useThemeContext } from "@/context/ThemeContext";
import { Users, Code2, Laptop } from "lucide-react";

export default function KeahlianSection() {
  const { theme } = useThemeContext();

  const softSkills = [
    "Jujur",
    "Bertanggung Jawab",
    "Adaptif",
    "Kerja Tim",
    "Disiplin",
    "Kreatif",
    "Cekatan",
    "Teliti",
    "Komunikatif",
    "Manajemen Waktu",
  ];

  const hardSkills = [
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Oracle",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    },
  ];

  const softwareSkills = [
    {
      name: "Canva",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
    {
      name: "Photoshop",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
    },
    {
      name: "Premiere Pro",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
    },
    {
      name: "Microsoft Office",
      icon: "https://img.icons8.com/color/480/microsoft-office-2019.png",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  return (
    <section
      id="keahlian"
      className={`relative overflow-hidden py-24 px-6 lg:px-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#050816]" : "bg-slate-100"
      }`}
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full" />

      {/* HEADER */}
      <div className="text-center mb-16 relative z-10">
        <span className="px-5 py-2 rounded-full bg-purple-600/20 border border-purple-500/20 text-purple-400 text-sm">
          Skills
        </span>

        <h2
          className={`mt-5 text-4xl font-bold ${
            theme === "dark" ? "text-white" : "text-slate-800"
          }`}
        >
          Keahlian Saya
        </h2>
      </div>

      {/* SOFT SKILLS */}
      <div
        className={`rounded-3xl p-8 mb-10 border relative z-10 ${
          theme === "dark"
            ? "bg-slate-900/40 border-purple-500/20"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <Users className="text-cyan-400" />

          <h3 className="text-2xl font-bold text-cyan-400">Soft Skills</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* HARD SKILLS */}
      <div
        className={`rounded-3xl p-8 mb-10 border relative z-10 overflow-hidden ${
          theme === "dark"
            ? "bg-slate-900/40 border-purple-500/20"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="flex items-center gap-3 mb-8">
          <Code2 className="text-green-400" />

          <h3 className="text-2xl font-bold text-green-400">Hard Skills</h3>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee-left hover:[animation-play-state:paused]">
            {[...hardSkills, ...hardSkills].map((skill, index) => (
              <div
                key={index}
                className={`min-w-[180px] h-[180px] rounded-3xl border backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
                ${
                  theme === "dark"
                    ? "bg-slate-900/60 border-slate-700/50"
                    : "bg-white border-slate-200"
                }`}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />

                <p
                  className={`mt-4 text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-slate-800"
                  }`}
                >
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SOFTWARE SKILLS */}
      <div
        className={`rounded-3xl p-8 border relative z-10 overflow-hidden ${
          theme === "dark"
            ? "bg-slate-900/40 border-purple-500/20"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="flex items-center gap-3 mb-8">
          <Laptop className="text-yellow-400" />

          <h3 className="text-2xl font-bold text-yellow-400">
            Software Skills
          </h3>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee-right hover:[animation-play-state:paused]">
            {[...softwareSkills, ...softwareSkills].map((skill, index) => (
              <div
                key={index}
                className={`min-w-[180px] h-[180px] rounded-3xl border backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.25)]
                  ${
                    theme === "dark"
                      ? "bg-slate-900/60 border-slate-700/50"
                      : "bg-white border-slate-200"
                  }`}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-16 h-16 object-contain transition duration-300 ${
                    skill.name === "GitHub" && theme === "dark" ? "invert" : ""
                  }`}
                />

                <p
                  className={`mt-4 text-lg font-semibold ${
                    theme === "dark" ? "text-white" : "text-slate-800"
                  }`}
                >
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
