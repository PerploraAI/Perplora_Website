"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Training from '../components/Training';
import Animations from '../components/Animations';

// Sample data for the cards (you can replace this with your own content)
const cardsData = [
  {
    title: "CHATBOTS",
    description:
      "Create intelligent chatbots to automate customer interactions and provide 24/7 support and solve your client queries.",
  },
  {
    title: "AI SERVICES",
    description:
      "Set up automated email responses to streamline communication and improve customer satisfaction.",
  },
  {
    title: "AI ANALYTICS",
    description:
      "Gain actionable insights from data analysis to optimize your marketing campaigns and business strategies.",
  },
  {
    title: "GENERATIVE AI",
    description:
      "Develop and deploy Generative AI models to enhance business operations and decision-making.",
  },
  {
    title: "AI AGENTS",
    description:
      "Leverage AI agents to automate repetitive tasks and improve operational efficiency.",
  },
];

export default function UniqueCardsPage() {
  return (
     <div className="md:overflow-x-hidden sm:overflow-x-hidden  lg:overflow-x-hidden prods md:w-[100vw]">
          <Navbar />
          <div id="container" className="max-w-7xl mx-auto text-center">

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-right md:text-center text-primary m-12 mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12 gap-8">
          {cardsData.map((card, index) => {
            // Alternate rotation: even cards rotate slightly clockwise, odd cards counter-clockwise.
            const rotateAngle = index % 2 === 0 ? "rotate-2" : "-rotate-2";
            return (
                <Animations inAnimation='slideInUp' outAnimation='fadeOut'  >
              <motion.div
                key={card.title}
                className={`p-6 bg-white border border-gray-200 shadow-lg rounded-3xl ${rotateAngle} transform transition-transform`}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {card.title}
                </h2>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
              </Animations>
            );
          })}
        </div>
        <Training />
      </div>

    </div>
    </div>
  );
}
