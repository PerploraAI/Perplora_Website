"use client"; // Ensure this component is treated as a client component

import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react'; // Import the arrow icons

const ClickPop = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null); // Create a ref for the popup

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  // Close the popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      className="relative inline-block" 
      ref={popupRef}
    >
      <a
        className={isOpen ? "text-black hover:text-black hover:cursor-pointer transition ease-in-out text-2xl cursor-pointer flex items-center" : "text-white hover:text-black hover:cursor-pointer transition ease-in-out text-2xl cursor-pointer flex items-center"}
        onClick={togglePopup}
      >
        {props.navtitle}
        {isOpen ? (
          <ArrowUp className="ml-2 transition-transform duration-200" />
        ) : (
          <ArrowDown className="ml-2 transition-transform duration-200" />
        )}
      </a>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-[250px] p-6 bg-glass border border-gray-300 transition-transform ease-in-out rounded-lg shadow-lg p-4 z-10">
          <ul className="space-y-2">
            <li>
              <a href={props.serv1link} className="text-white hover:cursor-pointer hover:text-black hover:decoration-white hover:underline-offset-2 transition ease-in-out hover:underline">
                {props.serv1}
              </a>
            </li>
            <li>
              <a href={props.serv2link} className="text-white hover:cursor-pointer hover:text-black transition hover:decoration-white hover:underline-offset-2 ease-in-out hover:underline">
                {props.serv2}
              </a>
            </li>
            <li>
              <a href={props.serv3link} className="text-white hover:cursor-pointer hover:text-black transition hover:decoration-white hover:underline-offset-2 ease-in-out hover:underline">
                {props.serv3}
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClickPop;