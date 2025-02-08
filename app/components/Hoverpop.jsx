"use client"
import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const HoverPop = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <a
        className="text-black text-3xl cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Services
        {isHovered ? (
          <ArrowUp className="ml-2 transition-transform duration-200" />
        ) : (
          <ArrowDown className="ml-2 transition-transform duration-200" />
        )}
      </a>
      {isHovered && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
          <img
            src="https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image URL
            alt="Service"
            className="w-full h-24 object-cover rounded-md mb-2"
          />
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Service 1
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Service 2
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Service 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HoverPop;