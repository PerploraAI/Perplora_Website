import React from "react";
import { ArrowRight } from "lucide-react";
import Animations from "./Animations";

const services = [
  {
    category: "CHATBOTS",
    title: "Create intelligent chatbots to automate customer interactions and provide 24/7 support.",
  },
  {
    category: "AI SERVICES",
    title: "Set up automated email responses to streamline communication and improve customer satisfaction.",
  },
  {
    category: "AI ANALYTICS",
    title: "Gain actionable insights from data analysis to optimize your marketing campaigns and business strategies.",
  },
  {
    category: "GENERATIVE AI",
    title: "Develop and deploy Generative AI models to enhance business operations and decision-making.",
  },
  {
    category: "AI AGENTS",
    title: "Leverage AI agents to automate repetitive tasks and improve operational efficiency, Our AI Agents automate your workflow! ",
  },
];

function ServiceBoxes() {
  return (
    <div id="products" className="flex flex-col items-center text-center p-10 bg-white">
      <h2 className="text-6xl font-bold text-black text-left mt-14 mb-8">How do we change your business game with <span className="text-primary font-bold ">Perplora?</span></h2>
      <Animations inAnimation='slideInUp' outAnimation='slideOutDown'>
        <div className="flex flex-wrap justify-center gap-12 p-12">
          {services.map((service, index) => (
            <Animations inAnimation='slideInUp' outAnimation='fadeOut' delay={index / 4} key={service.category}>
              <div
                className="relative md:w-[520px] md:h-[280px] w-[350px] h-[300px] rounded-xl shadow-lg p-8 flex flex-col justify-between
                           transition-transform duration-300 ease-in-out hover:scale-105 
                           bg-gradient-radial from-white to-purple-500 group"
              >
                {/* Purple accent line */}
                <div className="absolute top-5 left-6 w-12 h-1 bg-purple-600"></div>

                {/* Category */}
                <p className="text-sm md:text-3xl uppercase text-gray-700 font-semibold mt-4">
                  {service.category}
                </p>

                {/* Wrapper for text & button (barely visible before hover) */}
                <div className="opacity-40 text-2xl transition-opacity duration-300 group-hover:opacity-100">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-black">
                    {service.title}
                  </h3>

                  {/* Learn More Button */}
                  <button className="flex items-center gap-2 text-purple-700 font-medium hover:underline transition ease-in-out mt-4">
                   <a href="/p_products" className="flex items-center gap-2"> Learn more <ArrowRight size={18} /> </a> 
                  </button>
                </div>
              </div>
            </Animations>
          ))}
        </div>
      </Animations>
    </div>
  );
}

export default ServiceBoxes;