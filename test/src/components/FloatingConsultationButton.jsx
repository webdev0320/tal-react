import React from 'react';
import { PopupButton } from 'react-calendly';

const FloatingConsultationButton = () => {
  // Ensure the root element exists before mounting
  const rootElement = document.getElementById('root') || document.body;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <PopupButton
        url="https://calendly.com/taxaccolega/book-a-meeting"
        rootElement={rootElement}
        text="Book Free Consultation"
        className="bg-[#d2601a] text-white font-bold text-sm tracking-wide px-8 py-3.5 rounded-full shadow-lg transition-transform duration-300 hover:bg-[#b85014] hover:scale-105 active:scale-95"
      />
    </div>
  );
};

export default FloatingConsultationButton;
