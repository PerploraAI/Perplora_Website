"use client"
import { ArrowBigUp } from 'lucide-react';
import React from 'react';

const BackToTop = () => {
  const scrollToTop = () => {
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-primary text-white p-2 w-10 h-10 rounded-full shadow-lg transition-transform ease-in-out items-center justify-center transform hover:scale-105"
      aria-label="Back to top"
    >
      <ArrowBigUp className=' w-6 h-6' />
    </button>
  );
};

export default BackToTop;