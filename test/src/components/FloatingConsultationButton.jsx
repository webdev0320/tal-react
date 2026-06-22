"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import react-calendly with SSR disabled to prevent "auth" context crash
const PopupButton = dynamic(
  () => import('react-calendly').then((mod) => mod.PopupButton),
  { ssr: false }
);

const FloatingConsultationButton = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  if (!rootElement) return null;

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
