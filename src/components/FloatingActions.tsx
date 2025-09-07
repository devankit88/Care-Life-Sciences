import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const phoneNumber = '+919004664055';
  const whatsappMessage = 'Hello, I would like to inquire about your pharmaceutical products and services.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-green-500 to-emerald-green hover:from-emerald-green hover:to-green-500 text-white p-4 rounded-full shadow-3d hover:shadow-3d-hover transition-all duration-300 hover:scale-110 group btn-3d pulse-ring"
        title="WhatsApp Us"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-gradient-to-r from-deep-blue to-light-blue hover:from-light-blue hover:to-deep-blue text-white p-4 rounded-full shadow-3d hover:shadow-3d-hover transition-all duration-300 hover:scale-110 group btn-3d"
        title="Call Us"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;