// JCC/frontend/src/pages/HomePage.tsx

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import HeroForm from '../components/HeroForm'; // For mobile-only form
import AboutPage from './AboutPage';       // Import the AboutPage component
import ServicesPage from './ServicesPage'; // Import the ServicesPage component
import ContactPage from './ContactPage';   // Import the ContactPage component

const HomePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>Jos Car Care - Premium Mobile Car Detailing in Ernakulam, Kerala</title> {/* Enhanced title */}
        <meta name="description" content="Experience unparalleled car painting, detailing, and protection services from Jos Car Care. We offer convenient doorstep pickup & drop-off across Ernakulam, Udayamperoor, and all of Kerala." /> {/* Enhanced description */}
        <meta name="keywords" content="car painting, car detailing, mobile car wash, home service, vehicle protection, paint protection film, ceramic coating, Ernakulam, Udayamperoor, Kerala, India, Jos Car Care" /> {/* Enhanced keywords */}
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Jos Car Care - Premium Mobile Car Detailing" />
        <meta property="og:description" content="Experience unparalleled car painting, detailing, and protection services from Jos Car Care. We offer convenient doorstep pickup & drop-off across Ernakulam, Udayamperoor, and all of Kerala." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joscarcare.com/" /> {/* IMPORTANT: Update this to your actual production domain */}
        <meta property="og:image" content="https://joscarcare.com/logo.png" /> {/* IMPORTANT: Update this to your actual production logo URL */}
        {/* NEW: LocalBusiness Schema Markup (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Jos Car Care",
              "image": "https://joscarcare.com/logo.png", // Update with actual logo URL
              "url": "https://joscarcare.com/", // Update with actual domain
              "telephone": "+916238804932",
              "email": "mailto:info@joscarcare.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kandanad P O, Udayamperoor",
                "addressLocality": "Ernakulam",
                "addressRegion": "Kerala",
                "postalCode": "682305",
                "addressCountry": "IN"
              },
              "alternateName": "Jos Car Care", // Include the alternate name
              "openingHours": [
                "Mo-Sa 09:00-18:00"
              ],
              "description": "Premium mobile car detailing, painting, and protection services with pick-up & drop-off across Kerala.",
              "sameAs": [
                "https://www.facebook.com/joscarcare",
                "https://www.instagram.com/joscarcare"
                // Add other social media links here
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "9.8955", // Placeholder: Find actual latitude/longitude for Udayamperoor/Kandanad
                "longitude": "76.3681" // Placeholder
              },
              "hasMap": "https://www.google.com/maps/place/Udayamperoor,+Kerala+682307" // Placeholder, link to a general map of the area
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Hero Form for Mobile Only (Conditionally rendered outside HeroSection) */}
      {isMobile && (
        <section id="mobile-form-section" className="md:hidden py-8 px-4 container mx-auto bg-gray-900 text-white">
          <HeroForm />
        </section>
      )}

      {/* About Us Section */}
      {/* We use the AboutPage component directly here */}
      <AboutPage />

      {/* Services Section */}
      {/* We use the ServicesPage component directly here */}
      <ServicesPage />

      {/* Contact Us Section */}
      {/* We use the ContactPage component directly here */}
      <ContactPage />
    </>
  );
};

export default HomePage;