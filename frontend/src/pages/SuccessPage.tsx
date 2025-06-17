// JCC/frontend/src/pages/SuccessPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// SVG for a checkmark icon - modern and scalable
const CheckmarkIcon: React.FC = () => (
  <svg
    className="w-20 h-20 text-accent-yellow mx-auto mb-5 animate-scale-in" // Reduced mb- from mb-6 to mb-5
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const SuccessPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Jose Car Care - Inquiry Success!</title>
        <meta name="description" content="Thank you for your inquiry to Jose Car Care. Your request has been successfully received." />
        <meta name="keywords" content="success, inquiry received, thank you, Jose Car Care" />
        <meta property="og:title" content="Jose Car Care - Inquiry Success!" />
        <meta property="og:description" content="Thank you for your inquiry to Jose Car Care. Your request has been successfully received." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/success" />
        <meta property="og:image" content="http://localhost:3000/logo.png" />
      </Helmet>

      {/* Main page container: Full screen, centered content, with a dynamic background */}
      <div className="relative flex flex-col items-center justify-center min-h-screen py-8 px-4 md:px-0 text-white overflow-hidden">
        {/* Dynamic Background Layer: Primary linear gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        
        {/* Custom Radial Gradient Overlay */}
        <div className="absolute inset-0 z-0 radial-gradient-custom"></div>

        {/* --- New: Subtle Pattern Background --- */}
        {/* This class will be defined in index.css */}
        <div className="absolute inset-0 z-0 bg-pattern-subtle"></div>


        {/* The Success Message Card itself, refined sizing and positioning */}
        {/* max-w-md for mobile/tablet, max-w-lg for desktop. my-auto for strong vertical centering. */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 md:p-12 bg-white rounded-lg shadow-2xl text-dark-panel animate-scale-up-fade-in w-full max-w-md md:max-w-lg mx-auto my-auto">
          <CheckmarkIcon />
          <h3 className="text-3xl md:text-4xl font-extrabold mb-3 text-primary-blue font-poppins leading-tight"> {/* Reduced mb- from mb-4 to mb-3 */}
            Inquiry Received!
            <br /> Your Car's Journey to Shine Begins.
          </h3>
          <p className="text-lg md:text-xl leading-relaxed mb-4 text-text-muted max-w-prose"> {/* Reduced mb- from mb-6 to mb-4, added max-w-prose */}
            Thank you for reaching out to Jose Car Care! We've successfully received your request for a call. Our dedicated team is already reviewing your details, and you'll hear from us shortly to discuss your personalized car care needs.
          </p>
          <p className="text-base md:text-lg italic text-gray-500 mb-6"> {/* Reduced mb- from mb-8 to mb-6 */}
            Get ready to experience unparalleled convenience and meticulous detailing that truly preserves your investment.
          </p>
          <Link
            to="/"
            className="px-8 py-3 bg-primary-blue text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 ease-in-out text-lg md:text-xl font-poppins shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;