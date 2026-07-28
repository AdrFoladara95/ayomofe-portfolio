import React from "react";
import { FaTiktok, FaInstagram, FaLinkedinIn, FaWhatsapp,} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-slate-950 text-white py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              mo.designergirl<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-gray-400 mt-2 max-w-sm">
              Creating impactful visual identities, engaging digital experiences,
              and designs that help brands stand out.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-5 text-gray-300">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>

            <a href="#portfolio" className="hover:text-cyan-400 transition">
              Portfolio
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">

            <a
              href="https://www.instagram.com/mo.designergirl?igsh=djg3d2R0ZHU1Mmtp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@ayomofe_?_r=1&_t=ZS-98O1jbhCvFI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              <FaTiktok />
            </a>

            <a
              href="https://www.linkedin.com/in/ayomofe-o-davies-98a19925b?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/2348138881525"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">
          © {year} mo.designergirl. All rights reserved.
        </div>

      </div>
    </motion.footer>
  );
}