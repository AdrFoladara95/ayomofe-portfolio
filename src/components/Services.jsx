import React from "react";
import { FaPalette, FaInstagram, FaBoxOpen, FaImage, FaPrint, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
  {
    icon: <FaPalette />,
    title: "Creative Brand Identity",
    description:
      "Creating strong and memorable brand identities with unique visuals, colors, typography, and design systems that help businesses stand out."
  },
  {
    icon: <FaInstagram />,
    title: "Social Media Design",
    description:
      "Designing engaging social media graphics, promotional posts, adverts, and content visuals that connect with audiences."
  },
  {
    icon: <FaBoxOpen />,
    title: "Packaging Design",
    description:
      "Creating attractive and functional packaging designs that improve product presentation and strengthen brand recognition."
  },
  {
    icon: <FaImage />,
    title: "Event Packaging",
    description:
      "Designing complete event visuals including invitations, banners, programs, backdrops, souvenirs, and other event materials."
  },
  {
    icon: <FaPrint />,
    title: "Marketing Materials",
    description:
      "Designing professional flyers, brochures, posters, business cards, banners, and promotional materials for businesses."
  },
  {
    icon: <FaLaptopCode />,
    title: "Website Development",
    description:
      "Building responsive and user-friendly websites that help businesses establish a strong online presence."
  }
];

  return (
    <section id="services" className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div className="text-center mb-12"
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}        
        >
          <p className="text-cyan-400 uppercase tracking-widest">
            Services
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            What I Do
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Helping brands communicate visually through creative and
            professional designs.
          </p>
        </motion.div>


        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}

              className="
                bg-slate-800 
                p-8 
                rounded-2xl 
                border 
                border-slate-700
                h-full
              "
            >

              <div className="text-cyan-400 text-4xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}