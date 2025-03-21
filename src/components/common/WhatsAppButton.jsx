import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  // Format phone number properly - remove any spaces, keep only numbers and plus sign
  const whatsappNumber = "+919974285868";
  const message = "Hello, I would like to inquire about your products.";

  // Create the WhatsApp URL correctly
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber.replace(
    /\s+/g,
    ""
  )}&text=${encodeURIComponent(message)}`;

  // WhatsApp's official brand color: #25D366
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center justify-center bg-[#25D366] text-white p-3 rounded-full shadow-md hover:opacity-90 transition-all duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppButton;
