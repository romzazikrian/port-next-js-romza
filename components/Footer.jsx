"use client";

import { useThemeContext } from "@/context/ThemeContext";

export default function Footer() {
  const { theme } = useThemeContext();

  return (
    <footer className="relative mt-40 px-6 md:px-16 lg:px-24 xl:px-32 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[300px] h-[300px] bg-purple-600/20 blur-3xl rounded-full bottom-0 left-10"></div>
        <div className="absolute w-[300px] h-[300px] bg-fuchsia-500/20 blur-3xl rounded-full top-0 right-10"></div>
      </div>

      {/* TOP BORDER */}
      <div className="border-t border-slate-800/60 pt-6" />

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-6 text-sm text-slate-500">

        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-purple-400 font-medium">Romza</span>. All rights reserved.
        </p>

        <p className="text-slate-600 hover:text-slate-400 transition">
          Built with Next.js & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}