"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FlipCardsSection() {
  const contentData = {
    title: "Industry Level Insights & Technical Training for Faculties",
    description:
      "Stay ahead with the latest AI trends, expert guidance, and hands-on training sessions tailored for professionals and educators.",
    points: [
      "Stay informed about the latest AI trends and best practices.",
      "Get personalized support from AI experts on your journey.",
      "Develop AI skills with hands-on training and workshops.",
    ],
    buttonText: "Request Service",
    images: [
      "/images/insight.jpg",
      "/images/expert.jpg",
      "/images/training.jpg",
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === contentData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? contentData.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-white text-black py-16 px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
      {/* Left Side - Image Slider */}
      <div className="w-full md:w-1/2 relative">
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={contentData.images[currentIndex]}
              alt="AI Training"
              className="w-full h-auto object-cover rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-900 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-900 transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {contentData.images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-purple-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-6">
          {contentData.title.split(" & ")[0]} <br />
          <span className="text-purple-600">& {contentData.title.split(" & ")[1]}</span>
        </h2>
        <p className="text-gray-700 text-lg mb-6">{contentData.description}</p>
        <ul className="space-y-4 mb-6">
          {contentData.points.map((point, index) => (
            <li key={index} className="flex items-center text-lg">
              <span className="text-purple-600 text-xl mr-3">&#10003;</span>
              {point}
            </li>
          ))}
        </ul>
        <button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition-all duration-300">
          {contentData.buttonText}
        </button>
      </div>
    </section>
  );
}
