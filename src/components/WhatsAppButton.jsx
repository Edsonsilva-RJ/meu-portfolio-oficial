import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Substitua pelo seu número real (DDI + DDD + Número)
  const phoneNumber = "5521982859818"; 
  const message = "Olá Edson! Vi seu portfólio de Engenharia e gostaria de conversar sobre uma oportunidade.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contato pelo WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;