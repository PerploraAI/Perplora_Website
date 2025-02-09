"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ModalPopup({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  if (!isOpen) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.additional.value,
      }),
    });

    const result = await response.json();
    setIsSubmitting(false);
    setSubmissionStatus(result.success ? "success" : "error");
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl overflow-y-auto max-h-[90vh] relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-600 hover:text-black text-xl sm:text-2xl"
        >
          ✖
        </button>

        {/* Form Content */}
        <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-700 mb-4 text-center">
          PERPLORA AI Business Support
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-xs sm:text-sm md:text-base" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-2 sm:p-3 rounded-md border border-gray-300 text-xs sm:text-sm md:text-base"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-xs sm:text-sm md:text-base" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-2 sm:p-3 rounded-md border border-gray-300 text-xs sm:text-sm md:text-base"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-xs sm:text-sm md:text-base" htmlFor="phone">
              Phone
            </label>
            <div className="flex">
              <select className="p-2 sm:p-3 rounded-l-md border border-gray-300 bg-gray-100 text-xs sm:text-sm md:text-base">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>
              <input
                id="phone"
                type="text"
                placeholder="9876543210"
                className="w-full p-2 sm:p-3 rounded-r-md border border-gray-300 text-xs sm:text-sm md:text-base"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-xs sm:text-sm md:text-base" htmlFor="additional">
              Additional Details
            </label>
            <textarea
              id="additional"
              placeholder="Enter additional details"
              className="w-full p-2 sm:p-3 rounded-md border border-gray-300 text-xs sm:text-sm md:text-base"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white p-2 sm:p-3 rounded-md font-bold hover:bg-purple-800 text-xs sm:text-sm md:text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>

          {submissionStatus === "success" && (
            <p className="text-green-600 font-semibold mt-3 text-center text-xs sm:text-sm md:text-base">
              Form submitted successfully!
            </p>
          )}
          {submissionStatus === "error" && (
            <p className="text-red-600 font-semibold mt-3 text-center text-xs sm:text-sm md:text-base">
              Submission failed. Please try again.
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
