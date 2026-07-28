import React from "react";
import { useState } from "react";
import {FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp,} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
  e.preventDefault();

  const whatsappMessage = `
Hello, my name is ${formData.name}.

Email: ${formData.email}

Project details:
${formData.message}
`;

  const whatsappURL = `https://wa.me/2348138881525?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, "_blank");
};
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-cyan-400 uppercase tracking-widest">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-4">
            Have a project in mind? Send a message and let's create
            something amazing.
          </p>

        </div>



        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}>
            


          {/* Contact Details */}
          <div>


            <h3 className="text-2xl font-bold mb-6">
              Get In Touch
            </h3>


            <div className="space-y-6">


              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-xl" />

                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <a href="mailto:mofesgraphics@gmail.com" className="hover:text-cyan-400 transition">
                    mofesgraphics@gmail.com
                    
                  </a>
                </div>
              </div>



              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-xl" />

                <div>
                  <p className="text-gray-400 text-sm">
                    Phone
                  </p>

                  <a href="tel:+2348138881525" className="hover:text-cyan-400 transition">
                    +234 813 888 1525
                  </a>
                </div>
              </div>



              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-cyan-400 text-xl" />

                <div>
                  <p className="text-gray-400 text-sm">
                    WhatsApp
                  </p>

                  <a href="https://wa.me/2348138881525" target="_blank" rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>



              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />

                <div>
                  <p className="text-gray-400 text-sm">
                    Location
                  </p>

                  <p>
                    Nigeria
                  </p>
                </div>
              </div>


            </div>


          </div>




          {/* Form */}
          <motion.form
          onSubmit={handleSubmit}
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.6 }}
            className="
              bg-slate-800
              p-5 
              sm:p-8
              rounded-2xl
              space-y-5
            "
          >

            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({
                ...formData, name: e.target.value,
              })}
              className="
                w-full
                bg-slate-700
                rounded-lg
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-cyan-400
              "
            />


            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({
                ...formData, email: e.target.value,
              })}
              className="
                w-full
                bg-slate-700
                rounded-lg
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-cyan-400
              "
            />



            <textarea
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({
                ...formData, message: e.target.value,
              })}
              className="
                w-full
                bg-slate-700
                rounded-lg
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-cyan-400
              "
            ></textarea>



            <button
              type="submit"
              className="
                bg-cyan-400
                text-slate-900
                px-8
                py-3
                rounded-full
                font-semibold
                hover:scale-105
                transition
              "
            >
              Send WhatsApp Message
            </button>


          </motion.form>


        </motion.div>

      </div>

    </section>
  );
}