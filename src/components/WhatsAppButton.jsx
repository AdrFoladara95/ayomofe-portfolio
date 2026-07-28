import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348138881525?text=Hello!%20I%20came%20across%20your%20portfolio%20and%20I'd%20love%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        bg-green-500
        text-white
        p-4
        rounded-full
        shadow-lg
        hover:scale-110
        hover:bg-green-600
        transition
        duration-300
        z-50
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}