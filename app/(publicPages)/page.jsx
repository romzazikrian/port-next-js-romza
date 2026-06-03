"use client";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import TentangSection from "@/sections/TentangSection";
import PendidikanSection from "@/sections/PendidikanSection";
import PengalamanSection from "@/sections/PengalamanSection";
import KeahlianSection from "@/sections/KeahlianSection";
import ProyekSection from "@/sections/ProyekSection";
import KontakSection from "@/sections/KontakSection";

import { Instagram, Github, Linkedin, Facebook } from "lucide-react";
export default function Page() {
  const { theme } = useThemeContext();
  return (
    <>
      {" "}
      {/* HERO SECTION */}{" "}
      <div
        id="beranda"
        className="grid lg:grid-cols-2 gap-10 items-center px-8 lg:px-20 pt-37 pb-20 min-h-screen bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover"
      >
        {" "}
        {/* LEFT CONTENT */}{" "}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
          {" "}
          {/* TITLE */}{" "}
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-[1.1] max-w-[750px]">
            {" "}
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#923FEF] to-[#C35DE8] bg-clip-text text-transparent">
              {" "}
              M. Romza Zikrian{" "}
            </span>{" "}
            <br /> <span className="text-red-400">
              Website Developer
            </span>{" "}
          </h1>{" "}
          {/* BUTTON */}{" "}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-10 w-full">
            {" "}
            {/* HUBUNGI */}
            <Link href="/#kontak" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 h-14 min-w-[220px] rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-semibold shadow-lg shadow-purple-500/30 hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300">
                Hubungi Saya
              </button>
            </Link>
            {/* DOWNLOAD CV */}
            <a
              href="https://drive.google.com/uc?export=download&id=1RFchpOI1fXne80oLFVE4TiL1aoWXW2BJ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 h-14 min-w-[220px] rounded-full border-2 border-purple-400 text-purple-500 font-semibold bg-white/4 backdrop-blur-md hover:bg-purple-500 hover:text-white hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
          {/* SOCIAL ICON */}{" "}
          <div className="flex items-center gap-5 mt-10">
            <a
              href="https://www.instagram.com/mhmmdromza/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-700 hover:bg-purple-600 hover:text-white transition"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://github.com/romzazikrian"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-700 hover:bg-purple-600 hover:text-white transition"
            >
              <Github size={22} />
            </a>

            <a
              href="http://www.linkedin.com/in/mromzazikrian/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-700 hover:bg-purple-600 hover:text-white transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://www.facebook.com/romza.zikrian.2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-700 hover:bg-purple-600 hover:text-white transition"
            >
              <Facebook size={22} />
            </a>
          </div>
        </div>{" "}
        {/* RIGHT SIDE CODE CARD */}{" "}
        <div className="relative w-full max-w-2xl mx-auto">
          {" "}
          {/* GLOW */}{" "}
          <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full"></div>{" "}
          {/* CARD */}{" "}
          <div className="relative bg-[#0B1120]/90 border border-purple-500/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
            {" "}
            {/* TOP BAR */}{" "}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-purple-500/20 bg-white/5">
              {" "}
              <div className="w-3 h-3 rounded-full bg-red-400"></div>{" "}
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>{" "}
              <div className="w-3 h-3 rounded-full bg-green-400"></div>{" "}
              <p className="ml-4 text-sm text-slate-400">romza.dev</p>{" "}
            </div>{" "}
            {/* CONTENT */}{" "}
            <div className="p-8 font-mono text-sm md:text-base leading-8 overflow-x-auto">
              {" "}
              <p>
                {" "}
                <span className="text-pink-400">const</span>{" "}
                <span className="text-cyan-400">developer</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-yellow-300">{"{"}</span>{" "}
              </p>{" "}
              {/* NAME */}{" "}
              <p className="ml-6">
                {" "}
                <span className="text-green-400">name</span>{" "}
                <span className="text-white">:</span>{" "}
                <span className="text-orange-300">"M. Romza Zikrian"</span>{" "}
                <span className="text-white">,</span>{" "}
              </p>{" "}
              {/* ROLE */}{" "}
              <p className="ml-6">
                {" "}
                <span className="text-green-400">role</span>{" "}
                <span className="text-white">:</span>{" "}
                <span className="text-orange-300">
                  {" "}
                  "Website Developer & Multimedia Editor"{" "}
                </span>{" "}
                <span className="text-white">,</span>{" "}
              </p>{" "}
              {/* SKILLS */}{" "}
              <p className="ml-6">
                {" "}
                <span className="text-green-400">skills</span>{" "}
                <span className="text-white">:</span>{" "}
                <span className="text-white">[</span>{" "}
              </p>{" "}
              <div className="ml-12 flex flex-wrap gap-2 my-3">
                {" "}
                {["Next.js", "Laravel", "React", "Tailwind", "PHP", "Java"].map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/20 text-xs"
                    >
                      {" "}
                      {skill}{" "}
                    </span>
                  ),
                )}{" "}
              </div>{" "}
              <p className="ml-6">
                {" "}
                <span className="text-white">],</span>{" "}
              </p>{" "}
              {/* AVAILABLE */}{" "}
              <p className="ml-6">
                {" "}
                <span className="text-green-400">availableForWork</span>{" "}
                <span className="text-white">:</span>{" "}
                <span className="text-cyan-300">true</span>{" "}
                <span className="text-white">,</span>{" "}
              </p>{" "}
              {/* PASSION */}{" "}
              <p className="ml-6">
                {" "}
                <span className="text-green-400">passion</span>{" "}
                <span className="text-white">:</span>{" "}
                <span className="text-orange-300">
                  {" "}
                  "Building modern digital experiences"{" "}
                </span>{" "}
                <span className="text-white">,</span>{" "}
              </p>{" "}
              {/* CLOSE OBJECT */}{" "}
              <p>
                {" "}
                <span className="text-yellow-300">{"}"}</span>{" "}
              </p>{" "}
              {/* STATUS */}{" "}
              <div className="mt-8 flex items-center gap-3">
                {" "}
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>{" "}
                <p className="text-green-300 text-sm">
                  {" "}
                  Available for freelance projects{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <TentangSection />
      <PendidikanSection />
      <PengalamanSection />
      <ProyekSection />
      <KeahlianSection />
      <KontakSection />
    </>
  );
}
