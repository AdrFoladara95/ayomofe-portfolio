import React from "react";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        
        <a href="#home" className="sm:text-2xl text-xl font-bold text-cyan-400">
          mo.designergirl<span className="text-white">.</span>
        </a>

       
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        
        <a
          href="#contact"
          className="hidden md:block bg-cyan-400 text-slate-900 px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          Hire Me
        </a>

        
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-800 px-6 pb-6">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-6 inline-block bg-cyan-400 text-slate-900 px-5 py-2 rounded-full font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </header>
  );
}