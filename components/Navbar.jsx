"use client";

import { MenuIcon, XIcon, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  // Dropdown desktop & mobile dipisah
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false);

  const [activeSection, setActiveSection] = useState("beranda");

  // Label dropdown mobile aktif
  const [selectedDropdown, setSelectedDropdown] = useState("Pendidikan");

  useEffect(() => {
    if (openMobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openMobileMenu]);

  const navLinks = [
    {
      name: "Beranda",
      href: "#beranda",
      id: "beranda",
    },
    {
      name: "Tentang",
      href: "#tentang",
      id: "tentang",
    },
    {
      name: "Proyek",
      href: "#proyek",
      id: "proyek",
    },
    {
      name: "Keahlian",
      href: "#keahlian",
      id: "keahlian",
    },
    {
      name: "Kontak",
      href: "#kontak",
      id: "kontak",
    },
  ];

  const dropdownItems = [
    {
      name: "Pendidikan",
      href: "#pendidikan",
      id: "pendidikan",
    },
    {
      name: "Pengalaman",
      href: "#pengalaman",
      id: "pengalaman",
    },
  ];

  // Urutan dropdown mobile dinamis
  const orderedDropdown = [
    ...dropdownItems.filter((item) => item.name === selectedDropdown),
    ...dropdownItems.filter((item) => item.name !== selectedDropdown),
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 lg:px-20 py-4">
          {/* LOGO */}
          <Link href="/" onClick={() => setActiveSection("beranda")}>
            <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {/* Beranda & Tentang */}
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`transition hover:text-purple-500 ${
                    activeSection === link.id ? "text-purple-500" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* DROPDOWN DESKTOP */}
            <li className="relative">
              <button
                onClick={() => setOpenDesktopDropdown(!openDesktopDropdown)}
                className={`flex items-center gap-1 transition hover:text-purple-500 ${
                  activeSection === "pendidikan" ||
                  activeSection === "pengalaman"
                    ? "text-purple-500"
                    : ""
                }`}
              >
                {selectedDropdown}
                <ChevronDown
                  size={18}
                  className={`transition duration-300 ${
                    openDesktopDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDesktopDropdown && (
                <ul className="absolute top-12 left-0 min-w-[180px] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-2">
                  {orderedDropdown.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveSection(item.id);
                          setSelectedDropdown(item.name);
                          setOpenDesktopDropdown(false);
                        }}
                        className={`block rounded-xl px-4 py-2 transition hover:bg-gray-100 dark:hover:bg-zinc-800 ${
                          activeSection === item.id ? "text-purple-500" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Proyek Keahlian Kontak */}
            {navLinks.slice(2).map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`transition hover:text-purple-500 ${
                    activeSection === link.id ? "text-purple-500" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <div className="ml-4">
              <ThemeToggle />
            </div>
          </ul>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-black dark:text-white transition-colors duration-300"
            onClick={() => setOpenMobileMenu(true)}
          >
            <MenuIcon size={30} />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setOpenMobileMenu(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${
          openMobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px]
  bg-gradient-to-b from-[#0b2233] to-[#081827]
  backdrop-blur-2xl
  border-r border-cyan-500/10
  shadow-[0_0_40px_rgba(0,0,0,.35)]
  z-50 md:hidden
  transition-transform duration-500 ease-out
  ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </h1>

          <button
            onClick={() => setOpenMobileMenu(false)}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition flex items-center justify-center text-white"
          >
            <XIcon size={24} />
          </button>
        </div>

        {/* MENU */}
        <div className="flex flex-col px-4 py-6 gap-2 text-white font-medium">
          {/* BERANDA */}
          <Link
            href="#beranda"
            onClick={() => {
              setActiveSection("beranda");
              setOpenMobileMenu(false);
            }}
            className={`flex items-center rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-cyan-500/10 ${
              activeSection === "beranda"
                ? "bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400"
                : ""
            }`}
          >
            Beranda
          </Link>

          {/* TENTANG */}
          <Link
            href="#tentang"
            onClick={() => {
              setActiveSection("tentang");
              setOpenMobileMenu(false);
            }}
            className={`flex items-center rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-cyan-500/10 ${
              activeSection === "tentang"
                ? "bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400"
                : ""
            }`}
          >
            Tentang
          </Link>

          {/* DROPDOWN */}
          <div className="rounded-2xl overflow-hidden bg-white/[0.03]">
            <button
              onClick={() => setOpenMobileDropdown(!openMobileDropdown)}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/[0.04] transition"
            >
              <span>{selectedDropdown}</span>

              <ChevronDown
                size={18}
                className={`transition duration-300 ${
                  openMobileDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMobileDropdown && (
              <div className="px-3 pb-3 flex flex-col gap-2">
                {orderedDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.id);
                      setSelectedDropdown(item.name);
                      setOpenMobileDropdown(false);
                    }}
                    className={`rounded-xl px-3 py-2 text-sm transition hover:bg-cyan-500/10 ${
                      activeSection === item.id
                        ? "text-cyan-400 bg-cyan-500/10"
                        : "text-slate-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* PROYEK */}
          <Link
            href="#proyek"
            onClick={() => {
              setActiveSection("proyek");
              setOpenMobileMenu(false);
            }}
            className={`rounded-2xl px-4 py-3 transition hover:bg-cyan-500/10 ${
              activeSection === "proyek"
                ? "bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400"
                : ""
            }`}
          >
            Proyek
          </Link>

          {/* KEAHLIAN */}
          <Link
            href="#keahlian"
            onClick={() => {
              setActiveSection("keahlian");
              setOpenMobileMenu(false);
            }}
            className={`rounded-2xl px-4 py-3 transition hover:bg-cyan-500/10 ${
              activeSection === "keahlian"
                ? "bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400"
                : ""
            }`}
          >
            Keahlian
          </Link>

          {/* KONTAK */}
          <Link
            href="#kontak"
            onClick={() => {
              setActiveSection("kontak");
              setOpenMobileMenu(false);
            }}
            className={`rounded-2xl px-4 py-3 transition hover:bg-cyan-500/10 ${
              activeSection === "kontak"
                ? "bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400"
                : ""
            }`}
          >
            Kontak
          </Link>

          {/* FOOTER */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
