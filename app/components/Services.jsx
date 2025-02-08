import { ArrowDownIcon } from "lucide-react";
import Animations from "./Animations";
const servicesData = [
  {
    id: "chatbots",
    title: "CHATBOTS",
    description: "Create intelligent chatbots to automate customer interactions and provide 24/7 support.",
  },
  {
    id: "aiservices",
    title: "AI SERVICES",
    description: "Set up automated email responses to streamline communication and improve customer satisfaction.",
  },
  {
    id: "analytics",
    title: "AI ANALYTICS",
    description: "Gain actionable insights from data analysis to optimize your marketing campaigns and business strategies.",
  },
  {
    id: "agents",
    title: "AI AGENTS",
    description: "Workflow automation and operational efficiency improvement with our AI agents.",
  },
];

export default function Services() {
  return (
    <section id="services" className="flex flex-col items-center text-center p-10 bg-white">
      {/* Title */}
      <h2 className="text-5xl font-bold text-purple-700 mt-14 mb-8">Our Services:</h2>
      <Animations inAnimation='slideInUp' outAnimation='slideOutDown'>
      {/* Service Cards Container */}
      <div className="flex flex-col md:flex-row items-center md:ml-0 -ml-0 justify-center m-12 gap-12 w-full max-w-7xl">
        
        {servicesData.map((service) => (
      
          <div key={service.id} className="relative hover:scale-105 transition ease-in-out hover:shadow-xl bg-primary text-white p-6 rounded-2xl w-full md:w-[600px] md:h-[250px]">
            <div className="absolute top-0 left-0 bg-white text-2xl md:text-3xl text-black font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              {service.title}
            </div>
            <p className="md:mt-16 mt-8 text-left md:text-xl">
              {service.description}
            </p>
          </div>
  
        ))}

      </div>
      </Animations>
      {/* Bottom Text */}
      <div className="mt-10 text-5xl font-semibold text-black">
        Industry Level Insights <br /> and <span className="text-primary font-bold">Technical Training</span> for Faculties
      </div>
      
      {/* Scroll Down Hint */}
      <div className="mt-4 text-gray-500 text-sm flex flex-col items-center">
        <h1 className="text-xl flex flex-col items-center animate-bounce"> Scroll down to know more! <span className="text-xl"> <ArrowDownIcon /> </span> </h1>
      </div>
    </section>
  );
}