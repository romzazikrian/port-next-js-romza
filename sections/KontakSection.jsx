"use client";

import { useThemeContext } from "@/context/ThemeContext";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Send,
} from "lucide-react";

export default function KontakSection() {
  const { theme } = useThemeContext();

  const contactInfo = [
    {
      title: "Lokasi",
      value: "Bandar Lampung, Lampung, Indonesia",
      icon: <MapPin size={22} />,
      color: "text-cyan-400",
      link: null,
    },
    {
      title: "Nomor HP",
      value: "+62 858-3548-8425",
      icon: <Phone size={22} />,
      color: "text-green-400",
      link: "tel:+6285835488425",
    },
    {
      title: "WhatsApp",
      value: "+62 887-4760-7844",
      icon: <MessageCircle size={22} />,
      color: "text-emerald-400",
      link: "https://wa.me/6288747607844",
    },
    {
      title: "Email",
      value: "romzazikrianmuhammad@gmail.com",
      icon: <Mail size={22} />,
      color: "text-red-400",
      link: "mailto:romzazikrianmuhammad@gmail.com",
    },
  ];

  return (
    <section
      id="kontak"
      className={`relative overflow-hidden py-24 px-6 lg:px-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#050816]" : "bg-slate-100"
      }`}
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      {/* HEADER */}
      <div className="text-center mb-16 relative z-10">
        <span className="px-5 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/20 text-cyan-400 text-sm">
          Contact
        </span>

        <h2
          className={`mt-5 text-4xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-slate-800"
          }`}
        >
          Kontak Saya
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 relative z-10">

        {/* LEFT - CONTACT INFO */}
        <div
          className={`rounded-3xl border p-8 backdrop-blur-xl ${
            theme === "dark"
              ? "bg-slate-900/50 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-8 ${
              theme === "dark"
                ? "text-white"
                : "text-slate-800"
            }`}
          >
            Kontak Saya
          </h3>

          <div className="space-y-5">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  theme === "dark"
                    ? "bg-slate-800/50 hover:bg-slate-800"
                    : "bg-slate-50 hover:bg-slate-100"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-800/30 ${item.color}`}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h4
                    className={`font-semibold text-lg ${
                      theme === "dark"
                        ? "text-white"
                        : "text-slate-800"
                    }`}
                  >
                    {item.title}
                  </h4>

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-1 block break-words text-sm sm:text-base transition hover:text-cyan-400 ${
                        theme === "dark"
                          ? "text-slate-400"
                          : "text-slate-600"
                      }`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className={`mt-1 break-words text-sm sm:text-base ${
                        theme === "dark"
                          ? "text-slate-400"
                          : "text-slate-600"
                      }`}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - CONTACT FORM */}
        <div
          className={`rounded-3xl border p-8 backdrop-blur-xl ${
            theme === "dark"
              ? "bg-slate-900/50 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-8 ${
              theme === "dark"
                ? "text-white"
                : "text-slate-800"
            }`}
          >
            Kirim Pesan
          </h3>

          <form className="space-y-5">

            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full rounded-2xl px-5 py-4 outline-none border transition-all duration-300 focus:ring-2 focus:ring-cyan-500 ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  : "bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400"
              }`}
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Your Email"
              className={`w-full rounded-2xl px-5 py-4 outline-none border transition-all duration-300 focus:ring-2 focus:ring-cyan-500 ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  : "bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400"
              }`}
            />

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              className={`w-full rounded-2xl px-5 py-4 outline-none border transition-all duration-300 focus:ring-2 focus:ring-cyan-500 ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  : "bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400"
              }`}
            />

            {/* MESSAGE */}
            <textarea
              rows={6}
              placeholder="Write your message..."
              className={`w-full rounded-2xl px-5 py-4 outline-none border resize-none transition-all duration-300 focus:ring-2 focus:ring-cyan-500 ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  : "bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400"
              }`}
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <Send size={20} />
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}