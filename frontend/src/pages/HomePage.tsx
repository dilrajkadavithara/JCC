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
        <title>Jose Car Care - Home</title>
        <meta name="description" content="Welcome to Jose Car Care, your trusted local car detailing service in Ernakulam, Kerala. We offer premium car care delivered to your doorstep." />
        <meta name="keywords" content="car detailing, car wash, home service, mobile car wash, Ernakulam, Kerala, India, car cleaning, Jose Car Care" />
        <meta property="og:title" content="Jose Car Care - Home" />
        <meta property="og:description" content="Welcome to Jose Car Care, your trusted local car detailing service in Ernakulam, Kerala. We offer premium car care delivered to your doorstep." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:image" content="http://localhost:3000/logo.png" />
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