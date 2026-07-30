import React from "react";
import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {

  const categories = [
    "All",
    "Brand Identity",
    "Social Media",
    "Packaging",
    "Event Packaging",
    "Marketing",
  ];


  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);


  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );


  return (
    <section
      id="portfolio"
      className="bg-slate-800 text-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>

          <p className="text-cyan-400 uppercase tracking-widest">
            Portfolio
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Featured Works
          </h2>

          <p className="text-gray-400 mt-4">
            Explore creative projects across branding,
            design, and digital experiences.
          </p>

        </motion.div>



        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {categories.map((category) => (

            <motion.button
              key={category}
              whileHover={{scale: 1.05}}
              whileTap={{scale:0.95}}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 sm:px-5 
                py-2 
                rounded-full 
                transition
                ${
                  activeCategory === category
                    ? "bg-cyan-400 text-slate-900"
                    : "bg-slate-700 text-white hover:bg-slate-600"
                }
              `}
            >
              {category}
            </motion.button>

          ))}

        </div>




        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {filteredProjects.map((project) => (

            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="
                bg-slate-900
                rounded-2xl
                overflow-hidden
                group
                h-full
              "
            >


              {/* Project Image */}
              <div className="overflow-hidden">

                <motion.img
                  src={project.images[0]}
                  alt={project.title}
                  whileHover={{scale: 1.1}}
                  onClick={() => setSelectedProject(project)}
                  className="
                    w-full
                    h-64
                    object-cover
                    transition
                    duration-500
                  "
                />

              </div>




              {/* Project Details */}
              <div className="p-6">


                <p className="text-cyan-400 text-sm">
                  {project.category}
                </p>


                <h3 className="text-xl font-bold mt-2">
                  {project.title}
                </h3>


                <p className="text-gray-400 mt-3 leading-7">
                  {project.description}
                </p>



                <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-6 text-cyan-400 hover:text-white transition ">
                    View Project →
                </button>


              </div>


            </motion.div>

          ))}


        </div>


      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            closeModal={()=> setSelectedProject(null)}
          />

        )}
      
      </AnimatePresence>

    </section>
  );
}