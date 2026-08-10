import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '916267137892';
const DEFAULT_MESSAGE = 'Hi%2C%20I%20want%20to%20discuss%20digital%20marketing%20services%20for%20my%20business.';

export const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;

  const handleClick = () => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'whatsapp_click',
        source: 'floating_widget'
      });
    }
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      onClick={handleClick}
      aria-label="Chat with us on WhatsApp"
      title="Discuss Digital Marketing on WhatsApp"
    >
      <MessageCircle size={30} strokeWidth={2.2} />
    </a>
  );
};

export default WhatsAppButton;
