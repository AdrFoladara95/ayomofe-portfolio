import React from "react";
import profile from "../assets/profile.jpeg";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "Adobe Photoshop", level: 95 },
    { name: "CorelDRAW", level: 90 },
    { name: "Affinity Designer", level: 90 },
    { name: "Brand Identity", level: 92 },
    { name: "Social Media Design", level: 88 },
    { name: "Print Design", level: 87 },
  ];

  return (
    <section id="about" className="bg-slate-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div 
          className="flex justify-center" 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} >
          <img
            src={profile}
            alt="Designer"
            className="w-80 rounded-3xl shadow-2xl"
          />
        </motion.div>

        
        <motion.div  initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-cyan-400 uppercase tracking-widest mb-2">
            About Me
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Turning Ideas Into Visual Stories
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            I'm a passionate graphic designer who enjoys creating clean,
            modern, and meaningful designs. From logos and brand identities
            to social media graphics and print materials, I help businesses
            communicate their message through thoughtful design. Every project is approached with creativity, clarity, and a focus on helping brands stand out with confidence.
          </p>
        

          {/* Stats */}
          <motion.div className="grid grid-cols-2 gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-slate-700 rounded-xl p-5 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">120+</h3>
              <p className="text-gray-300">Projects</p>
            </div>

            <div className="bg-slate-700 rounded-xl p-5 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">80+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </div>

            <div className="bg-slate-700 rounded-xl p-5 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">4+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>

            <div className="bg-slate-700 rounded-xl p-5 text-center">
              <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
              <p className="text-gray-300">Brands Built</p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div 
          className="space-y-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          >
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-3">
                  <motion.div
                    className="bg-cyan-400 h-3 rounded-full"
                    initial={{width:0}}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{once: true}}
                    transition={{duration:1, delay: skill.level / 500,}}
                  >

                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>

          <a 
          href="/ayomofe-cv.pdf"
          download
          className="mt-10 bg-cyan-400 text-slate-900 px-8 py-3 inline-block rounded-full font-semibold hover:scale-105 transition">
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}