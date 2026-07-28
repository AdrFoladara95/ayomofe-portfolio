import React from "react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import profile from '../assets/profile.jpeg'
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

       
        <motion.div
        initial = {{opacity: 0, x: -50}} 
        animate = {{opacity: 1, x: 0}}
        transition={{duration: 0.8}}
        >
          <p className="text-cyan-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Ayomofe Oluwaseyi <br />
            Davies
          </h1>

          <h2 className="text-2xl text-gray-300 mt-4">
            Graphic Designer
          </h2>

          <p className="text-gray-400 mt-6 leading-8 max-w-lg">
           I build premium brands through strategic design—creating distinctive 
           identities that inspire trust, attract the right audience, and drive 
           growth. </p>

          
          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#contact"
              className="bg-cyan-400 text-slate-900 px-7 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Hire Me
            </a>

            <a
              href="#portfolio"
              className="border border-cyan-400 px-7 py-3 rounded-full hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              View Portfolio
            </a>
          </div>

          
          <div className="flex gap-5 mt-10 text-2xl">
            <a href="https://www.instagram.com/mo.designergirl?igsh=djg3d2R0ZHU1Mmtp">
              <FaInstagram className="hover:text-cyan-400 transition" />
            </a>

            <a href="https://www.linkedin.com/in/ayomofe-o-davies-98a19925b?utm_source=share_via&utm_content=profile&utm_medium=member_ios">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>

            <a href="https://www.tiktok.com/@ayomofe_?_r=1&_t=ZS-98O1jbhCvFI">
              <FaTiktok className="hover:text-cyan-400 transition" />
            </a>

           
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div className="flex justify-center" 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-cyan-400 p-2">
            <img
              src={profile}
              alt="Designer"
              className="w-full h-full rounded-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}