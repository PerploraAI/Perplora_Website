"use client";
import React from 'react';
import Button from './Button';
import Animations from './Animations';

const testimonials = [
  {
    text: "Perplora AI's chatbot transformed our customer service! Response accuracy and 24/7 availability boosted our client satisfaction by 40%.",
    name: "Sarath Kumar",
    handle: "@sarahthompson",
    image: "https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg",
  },
  {
    text: "Their generative AI models helped us automate content creation while maintaining brand voice. Now we produce 3x more marketing material!",
    name: "Vikash Raj",
    handle: "@rajpatel",
    image: "https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg",
  },
  {
    text: "The AI analytics dashboard revealed hidden customer patterns we've now monetized. Best decision we made for data-driven decision making!",
    name: "Farooq Shaik",
    handle: "@emilyzhang",
    image: "https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg",
  },
  {
    text: "Their custom AI agent for lead qualification has reduced our sales team workload by 60% while increasing conversion rates. Absolute game-changer!",
    name: "Sumanth Daripalli",
    handle: "@marcusjohnson",
    image: "https://i.pinimg.com/736x/aa/c6/a1/aac6a12fd48d80fe1c1d7e4f87505589.jpg",
  },

];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg font-semibold text-purple-600">Testimonials</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          We have worked with lots of amazing people!
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {testimonials.slice(0, 6).map((testimonial, index) => (
          <Animations inAnimation='slideInUp' outAnimation='slideOutDown' delay={index / 4} key={testimonial.name}>
            <div className="bg-white hover:scale-105 transition ease-in-out p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">{testimonial.text}</p>
              <div className="mt-4 flex items-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                />
                <div className="ml-3">
                  <p className="text-sm text-primary font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
                {testimonial.logo && (
                  <div className="ml-auto">
                    <img
                      className="h-6 w-6"
                      src={testimonial.logo}
                      alt="Company logo"
                    />
                  </div>
                )}
              </div>
            </div>
          </Animations>
        ))}
      </div>
      <div className="mt-10 text-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 mb-4">
            Join the ranks of satisfied customers who have experienced our services.
          </p>
          <Button btnlink="tel:918056890200" btntitle="Book a Call!" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;