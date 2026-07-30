import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


export default function ProjectModal({ project, closeModal }) {

  if (!project) return null;
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
  const nextIndex = (currentIndex + 1) % project.images.length;
  setCurrentIndex(nextIndex);
  setSelectedImage(project.images[nextIndex]);
};

const previousImage = () => {
  const prevIndex =
    (currentIndex - 1 + project.images.length) % project.images.length;

  setCurrentIndex(prevIndex);
  setSelectedImage(project.images[prevIndex]);
};


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed
        inset-0
        bg-black/70
        flex
        items-center
        justify-center
        z-50
        p-4
      "
    >

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{opacity:0, scale: 0.8}}
        transition={{ duration: 0.3 }}
        className="
          bg-slate-900
          rounded-2xl
          max-w-5xl
          w-full
          max-h-[90vh]
          overflow-y-auto
          p-5 sm:p-8
          relative
        "
      >

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="
            absolute
            top-3
            right-4
            text-white
            text-3xl
            transition
            hover:text-cyan-400
          "
        >
          ×
        </button>


        {/* Title */}
        <p className="text-cyan-400">
          {project.category}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {project.title}
        </h2>


        <p className="text-gray-400 mt-4">
          {project.description}
        </p>



        {/* Images Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {project.images.length > 0 ? (

            project.images.map((image, index) => (

              <motion.img
                key={index}
                src={image}
                alt={project.title}
                initial={{opacity: 0, y:20}}
                animate={{opacity: 1, y:0}}
                onClick={() => {setSelectedImage(image);setCurrentIndex(index);

                }}
                className="
                  rounded-xl
                  w-full
                  h-64
                  object-cover
                  cursor-pointer
                  hover:scale-105
                  transition
                "
              />

            ))

          ) : (

            <div className="text-gray-400">
              Project images coming soon
            </div>

          )}

        </div>


      </motion.div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-100 p-5"
        onClick={() => setSelectedImage(null)}
        >

          <button
  onClick={() => setSelectedImage(null)}
  className="
    absolute
    top-5
    right-5
    text-white
    text-4xl
    hover:text-cyan-400
  "
>
  ×
</button>
          <button 
          onClick={(e) => {
            e.stopPropagation();
            previousImage();
          }}
          className="absolute left-5 text-white text-4xl hover:text-cyan-400"
          >
            ‹
          </button>
          <img src={selectedImage} alt="Full view"
          className="max-w-[90vw] max-h-[90vh] rounded-xl object-contain" 
          onClick={(e) => e.stopPropagation()}/>

          <button 
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-5 text-white text-4xl hover:text-cyan-400"
          >
            ›
          </button>

        </div>
      )}

    </motion.div>
  );
}