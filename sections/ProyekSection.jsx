"use client";

import { useState } from "react";
import { useThemeContext } from "@/context/ThemeContext";
import { Github, ExternalLink, X } from "lucide-react";

export default function ProyekSection() {
  const { theme } = useThemeContext();
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Website Perpustakaan",
      image: "/assets/project-library.png",
      description:
        "Website perpustakaan berbasis Next.js dan MongoDB yang dikembangkan bersama tim. Saya berperan sebagai Front-End Developer dalam pembuatan tampilan antarmuka modern dan responsive.",
      tech: ["Next.js", "MongoDB", "Tailwind"],
    },
    {
      title: "Website GYM",
      image: "/assets/project-gym.png",
      description:
        "Website sistem manajemen GYM berbasis Laravel dan MySQL dengan fitur pengelolaan member, jadwal latihan, serta layanan kebugaran.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
    },
    {
      title: "Website PKBI Lampung",
      image: "/assets/project-pkbi.png",
      description:
        "Website organisasi PKBI Lampung berbasis Laravel dan MySQL untuk publikasi kegiatan, informasi layanan, dan pengelolaan konten digital.",
      tech: ["Laravel", "MySQL", "PHP"],
    },
    {
      title: "Desain PPDB SDN 4 Way Laga",
      image: "/assets/project-ppdb.png",
      description:
        "Desain Canva untuk penerimaan peserta didik baru SDN 4 Way Laga dengan tampilan informatif, modern, dan mudah dipahami masyarakat.",
      tech: ["Canva", "Design"],
    },
  ];

  return (
    <section
      id="proyek"
      className={`relative overflow-hidden py-20 px-6 lg:px-16 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#050816]" : "bg-slate-100"
      }`}
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* HEADER */}
      <div className="text-center mb-12 relative z-10">
        <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/20 text-cyan-400 text-sm">
          Projects
        </span>

        <h2
          className={`mt-4 text-3xl font-bold ${
            theme === "dark" ? "text-white" : "text-slate-800"
          }`}
        >
          Proyek Saya
        </h2>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(6,182,212,0.18)]
            ${
              theme === "dark"
                ? "bg-slate-900/50 border-slate-800"
                : "bg-white border-slate-200"
            }`}
          >
            {/* IMAGE */}
            <div className="overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                onClick={() => setSelectedImage(project.image)}
                className="w-full h-[160px] object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-cyan-500 text-white text-[11px] font-medium shadow">
                Project
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3
                className={`text-base font-semibold ${
                  theme === "dark"
                    ? "text-white"
                    : "text-slate-800"
                }`}
              >
                {project.title}
              </h3>

              <p
                className={`mt-2 text-sm leading-6 line-clamp-4 ${
                  theme === "dark"
                    ? "text-slate-400"
                    : "text-slate-600"
                }`}
              >
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full text-[11px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* IMAGE PREVIEW MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-5"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition"
            >
              <X size={35} />
            </button>

            {/* IMAGE */}
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}