"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import HowItWorks from "../components/HowItWorks";
import Animations from "../components/Animations";
import Footer from './../components/Footer';

async function getProducts() {
  return [
    {
      id: 1,
      name: "CHATBOTS",
      tags: ["Automation", "24/7 Support"],
      description: "Create intelligent chatbots to automate customer interactions and provide 24/7 support and solve your client queries.",
      images: ["/images/cbot1.jpg", "/images/cbot2.jpg"],
    },
    {
      id: 2,
      name: "AI SERVICES",
      tags: ["Email Automation", "Customer Satisfaction"],
      description: "Set up automated email responses to streamline communication and improve customer satisfaction.",
      images: ["/images/mail1.jpg", "/images/mail2.jpg"],
    },
    {
      id: 3,
      name: "AI ANALYTICS",
      tags: ["Data Insights", "Marketing Optimization"],
      description: "Gain actionable insights from data analysis to optimize your marketing campaigns and business strategies.",
      images: ["/images/anal1.jpg", "/images/anal2.jpg"],
    },
    {
      id: 4,
      name: "GENERATIVE AI",
      tags: ["AI Models", "Decision Making"],
      description: "Develop and deploy Generative AI models to enhance business operations and decision-making.",
      images: ["/images/gen1.jpg", "/images/gen2.jpg"],
    },
    {
      id: 5,
      name: "AI AGENTS",
      tags: ["Automation", "Workflow Enhancement"],
      description: "Leverage AI agents to automate repetitive tasks and improve operational efficiency. Our AI Agents automate your workflow!",
      images: ["/images/agent.jpg"],
    },
  ];
}

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProduct.images.length);
      }, Math.random() * 3000 + 2000);
      return () => clearInterval(interval);
    }
  }, [selectedProduct]);

  return (
    <div className="md:overflow-x-hidden sm:overflow-x-hidden  lg:overflow-x-hidden prods md:w-[100vw]">
      <Navbar />
      <div id="container" className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col overflow-hidden gap-2">
        <h1 className="md:text-4xl text-3xl m-2 text-right overflow-hidden md:text-center md:text-5xl md:mt-16 md:mb-16 font-bold mb-8 text-black">
          Explore our wide range of products available at <span className="text-purple-500">Perplora!</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden p-6 lg:grid-cols-3 gap-8">
        {products.map((product) => (
  <Animations key={product.id} inAnimation='slideInUp' outAnimation='fadeOut' delay={product.id / 4}>
    <div 
      className="group border rounded-3xl p-4 shadow-lg bg-white overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer" 
      onClick={windowWidth > 768 ? () => setSelectedProduct(product) : null}
    >
      <div className="relative w-full p-0 h-48 overflow-hidden rounded-r-2xl">
        <Image src={product.images[0]} alt={product.name} layout="fill" objectFit="cover" className="rounded-r-2xl m-0 p-0 group-hover:opacity-90 transition" />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <h2 className="text-2xl font-semibold mt-4 text-left text-gray-900">{product.name}</h2>
        <div className="flex flex-wrap text-left gap-2 mt-3">
          {product.tags.map((tag, index) => (
            <span key={index} className="bg-purple-100 text-purple-600 px-3 py-1 text-sm rounded-full font-medium">{tag}</span>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-left mr-2 leading-relaxed">{product.description}</p>
        <button className="mt-5 px-5 max-w-[200px] py-2 bg-purple-500 text-white font-semibold rounded-3xl hover:bg-purple-600 transition-all shadow-md hover:shadow-lg">
          Request Demo
        </button>
      </div>
    </div>
  </Animations>
))}
        </div>
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white p-6 gap-2 rounded-3xl shadow-xl max-w-5xl w-full flex flex-col md:flex-row relative">
            <button className="absolute top-4 right-4 z-3 mb-2 text-primary  hover:text-black text-3xl font-bold" onClick={() => setSelectedProduct(null)}>
              &times;
            </button>
            <div className="w-full md:w-1/2 relative h-96 overflow-hidden rounded-l-3xl flex items-center">
              <Image src={selectedProduct.images[currentImageIndex]} alt={selectedProduct.name} layout="fill" objectFit="cover" className="rounded-l-3xl -z-3" />
              <button className="absolute right-2 bg-primary text-white p-2 rounded-xl shadow-md" onClick={() => setCurrentImageIndex((currentImageIndex + 1) % selectedProduct.images.length)}>
                ▶
              </button>
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedProduct.tags.map((tag, index) => (
                  <span key={index} className="bg-purple-100 text-purple-600 px-3 py-1 text-sm rounded-full font-medium">{tag}</span>
                ))}
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">{selectedProduct.description}</p>
              <button className="mt-5 px-5 max-w-[200px] py-2 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition-all shadow-md hover:shadow-lg">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      )}
 <div className="">
  <HowItWorks />
   <Footer />
 </div>
    </div>
  );
}