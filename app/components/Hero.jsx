"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import Animations from "./Animations";
import ModalPopup from "./Form";

const images = [
  "./images/hero1.jpeg",
  "./images/hero3.jpg",
  "./images/hero9.jpg",
  "./images/hero7.jpg",
  "./images/hero8.jpg",
  "./images/hero6.jpg",
  "./images/her07.jpeg",
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className={`hero relative w-full h-screen flex flex-col items-center overflow-hidden ${isModalOpen ? 'overflow-hidden' : ''}`}>
      {/* Full-Screen Background Carousel */}
      <div className={`absolute inset-0 w-full h-full transition-all duration-300 ${isModalOpen ? 'opacity-30' : 'opacity-100'}`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentImage]}
            src={images[currentImage]}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col w-full h-screen bg-black/60 items-center justify-center p-4 md:p-10">
        <Animations inAnimation="slideInUp" outAnimation="slideOutDown">
          <div className="flex flex-col w-full max-w-4xl mx-auto p-6 md:p-10 items-center rounded-xl text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-white font-bold leading-tight">
              Unlock the power of <br /> <span className="text-5xl sm:text-6xl md:text-7xl">AI with</span> <span className="text-primary text-5xl sm:text-6xl  md:text-7xl">PERPLORA</span>
            </h1>
            <h2 className="text-sm sm:text-lg md:text-2xl text-white/80 font-normal mt-4">
              The Future of AI Services is here, now!
            </h2>
            <div className="flex flex-col items-center justify-center md:flex-row gap-4 mt-6 w-full max-w-md">
            <a
                href="tel:918056890200"
                className="w-full md:w-auto bg-primary text-white px-6 py-3 md:mt-0 mt-6 rounded-md font-bold hover:bg-black hover:outline transition ease-in-out hover:outline-white"
              >
                Give us Call
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full md:w-auto bg-primary text-white px-6 py-3 md:mt-0 mt-6 rounded-md font-bold hover:bg-black hover:outline transition ease-in-out hover:outline-white"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </Animations>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <ModalPopup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Hero;
