// JCC/frontend/src/pages/AboutPage.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';

// Placeholder for a simple checkmark SVG or icon if needed
// const CheckmarkIcon = () => (
//   <svg className="w-6 h-6 text-primary-blue mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
//   </svg>
// );

const AboutPage: React.FC = () => {
  return (
    <>
       <Helmet>
        <title>About Jose Car Care - 25 Years of Mobile Detailing Expertise in Kerala</title> {/* Enhanced title */}
        <meta name="description" content="Learn about Jose Car Care's 25-year journey in premium mobile car detailing. Discover our commitment to vehicle protection, customer satisfaction, and convenient pick-up/drop-off service across Ernakulam, Udayamperoor, and Kerala." /> {/* Enhanced description */}
        <meta name="keywords" content="about us, Jose Car Care story, mission, values, car detailing expertise, mobile car wash Kerala, 25 years experience, vehicle protection, Ernakulam, Udayamperoor, Kerala" /> {/* Enhanced keywords */}
        {/* OpenGraph Tags */}
        <meta property="og:title" content="About Jose Car Care - Mobile Detailing Expertise" />
        <meta property="og:description" content="Learn about Jose Car Care's 25-year journey in premium mobile car detailing. Discover our commitment to vehicle protection, customer satisfaction, and convenient pick-up/drop-off service across Ernakulam, Udayamperoor, and Kerala." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://josecarcare.com/about" /> {/* IMPORTANT: Update this to your actual production domain */}
        <meta property="og:image" content="https://josecarcare.com/images/about-us-hero.webp" /> {/* IMPORTANT: Update this to your actual production logo/image URL */}
      </Helmet>

      {/* Updated vertical padding for less blank space between sections */}
      <section id="about-section" className="py-16 md:py-20 bg-dark-panel text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-stretch md:space-x-12">
            {/* Left Half: Text Content */}
            <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in-up flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-text-light font-poppins drop-shadow-md">
                Why Jose Car Care? Our Unrivaled Dedication & Reach.
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-text-muted">
                For 25 years, Jose Car Care has been the trusted name in premium vehicle detailing across Kerala. What began in 2000 as a home-grown passion has blossomed into a service dedicated to protecting your automotive investment and making every drive a joy. We believe in meticulous craftsmanship, unrivaled convenience, and a truly personalized approach, serving thousands of satisfied customers who trust us with their cherished vehicles.
              </p>

              {/* Key Differentiators - Refined for mobile alignment */}
              <ul className="space-y-4 text-lg md:text-xl text-text-light">
                <li className="flex items-start">
                  <span className="text-accent-yellow text-2xl mr-3 flex-shrink-0">✦</span>
                  <p className="flex-grow text-left">
                    <span className="font-semibold">Unmatched Convenience:</span> Pick Up & Drop Anywhere in Kerala.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-yellow text-2xl mr-3 flex-shrink-0">✦</span>
                  <p className="flex-grow text-left">
                    <span className="font-semibold">Decades of Expertise:</span> 25 Years of Flawless Service Since 2000.
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="text-accent-yellow text-2xl mr-3 flex-shrink-0">✦</span>
                  <p className="flex-grow text-left">
                    <span className="font-semibold">Customer-First Philosophy:</span> Thousands of Happy Customers.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-yellow text-2xl mr-3 flex-shrink-0">✦</span>
                  <p className="flex-grow text-left">
                    <span className="font-semibold">Preserving Your Investment:</span> Beyond Clean. Beyond Expectation.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-yellow text-2xl mr-3 flex-shrink-0">✦</span>
                  <p className="flex-grow text-left">
                    <span className="font-semibold">Meticulous Attention to Detail:</span> Every Curve, Every Crevice.
                  </p>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mt-10 text-center md:text-left">
                <a
                  href="/services"
                  className="inline-block px-8 py-3 bg-primary-blue text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 ease-in-out text-lg font-poppins shadow-lg"
                >
                  Explore Our Services
                </a>
              </div>
            </div>

            {/* Right Half: Image & Overlaid Stats */}
            <div className="md:w-1/2 relative flex justify-center items-center p-4 md:p-0">
              <img
                src="/images/about-us-hero.webp"
                alt="Professional car detailing in progress by Jose Car Care expert"
                className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
              />
              {/* Overlaid Statistics/Badges */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                {/* Top Right Badge - Years of Service */}
                <div className="self-end bg-primary-blue text-white rounded-full px-6 py-3 text-xl font-bold shadow-lg animate-fade-in-up delay-300 transform hover:scale-105 transition-transform duration-300">
                  25+ Years
                </div>
                {/* Bottom Left Badge - Customers Served */}
                <div className="self-start bg-accent-yellow text-dark-panel rounded-full px-6 py-3 text-xl font-bold shadow-lg animate-fade-in-up delay-500 transform hover:scale-105 transition-transform duration-300">
                  1000s+ Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;