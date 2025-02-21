import React from "react";
import { FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col text-white py-10">
      <div className="container flex flex-col md:items-center mx-auto px-4">
        <div className="md:gap-36 gap-12 md:w-full flex md:flex-row justify-evenly flex-col ">
          {/* Company Information */}
          <div className="flex flex-col ">
          <img className='w-[50px] h-[50px] mr-2' src='/images/logo.png' alt='Logo' />
            <h2 className="text-xl font-bold mb-4">PERPLORA AI</h2>
            <p className="w-[300px] md:w-[350px] ">
            We are a deep tech <strong>Generative AI company</strong>. Our mission is to provide cutting-edge AI applications, including Generative AI and Agentic AI solutions that are affordable, accessible, and adaptable for billions.
            </p>
          </div>

          {/* Company Links */}
          <div className="text-left ">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about">Details</a></li>
              <li><a href="mailto:perploraaitechnologies@gmail.com">Mail us</a></li>
              <li><a href="tel:918056890200">Give us a Call! </a></li>
            </ul>
          </div>

          {/* Resource Center */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links:</h3>
            <ul className="space-y-2">
              <li><a className="hover:font-bold " href="#about">About Us</a></li>
              <li><a className="hover:font-bold " href="#services">Services</a></li>
              <li><a className="hover:font-bold " href="#products">Products</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us:</h3>
            <div className="flex space-x-4">
              <a target="_blank" href="http://www.linkedin.com/company/perploraai"><FaLinkedin size={24} /></a>
              <a target="_blank"  href="https://www.youtube.com/@perploraAI"><FaYoutube size={24} /></a>
              <a target="_blank"  href="https://www.facebook.com/profile.php?id=61573179680728"><FaFacebook size={24} /></a>
              <a target="_blank"  href="https://www.instagram.com/perploraai/"><FaInstagram size={24} /></a>
              <a target="_blank"  href="https://x.com/Perploraai"><FaTwitter size={24} /></a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-10 text-center">
          <p>Contact us through WhatsApp!</p>
          <div className="flex justify-center items-center gap-2 text-black">
                <FaWhatsapp className="text-green-400" size={24} />
                <p className="text-green-400 text-2xl"><a href="https://wa.me/916379510435">WhatsApp me</a></p>
            </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-10 text-center border-t border-gray-500 pt-4">
          <p className="text-sm">© 2025 PERPLORA AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
