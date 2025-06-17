// JCC/frontend/src/components/HeroSection.tsx

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper/types';
import HeroForm from './HeroForm'; // Import the HeroForm component

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- Marketing Content for Hero Section ---
const heroSlides = [
  {
    id: 1,
    image: '/images/hero-slide-1.webp',
    alt: 'Premium car detailing service at your home',
    heading: 'Protect Your Pride. Preserve Your Investment.',
    subheading: 'Expert detailing designed to shield your car from the elements and maintain its showroom allure, effortlessly delivered to your doorstep in Ernakulam.',
  },
  {
    id: 2,
    image: '/images/hero-slide-2.webp',
    alt: 'Expert car interior cleaning and restoration',
    heading: 'Beyond Clean: Your Car, Reimagined.',
    subheading: 'At Jose Car Care, we transform vehicles into statements. Experience a level of shine and detail that truly sets your car apart on Kerala\'s roads.',
  },
  {
    id: 3,
    image: '/images/hero-slide-3.webp',
    alt: 'Convenient mobile car wash and polishing services',
    heading: 'Your Schedule, Your Location. Our Expertise.',
    subheading: 'Experience premium, personalized car detailing where you are most comfortable. Jose Car Care brings the spa treatment for your vehicle directly to you.',
  },
  {
    id: 4,
    image: '/images/hero-slide-4.webp',
    alt: 'Professional car care with meticulous attention to detail',
    heading: 'The Art of Detailing: Crafted with Passion.',
    subheading: 'Every curve, every crevice. Our skilled professionals bring meticulous attention and genuine passion to restore your vehicle\'s pristine condition.',
  },
  {
    id: 5,
    image: '/images/hero-slide-5.webp',
    alt: 'Hassle-free car detailing for peace of mind',
    heading: 'Effortless Shine. Uncompromised Quality.',
    subheading: 'Enjoy the convenience of top-tier car care without leaving home. We handle the details, so you can enjoy the drive, worry-free.',
  },
];

// Content for smaller screens (single image background)
const mobileHeroContent = {
  image: '/images/hero-mobile-bg.webp',
  alt: 'Mobile car detailing service in Ernakulam',
  heading: 'Jose Car Care: Detail Delivered.',
  subheading: 'Protecting your vehicle, preserving its value, right at your doorstep in Ernakulam.',
};

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home-section" className="relative w-full h-screen overflow-hidden">
      {/* Navbar is superimposed */}
      <Navbar />

      {/* Hero Background (Responsive) */}
      {isMobile ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mobileHeroContent.image})` }}
          aria-label={mobileHeroContent.alt}
        ></div>
      ) : (
        <Swiper
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          slidesPerView={1}
          className="w-full h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                aria-label={slide.alt}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Overlay for Text Readability - Linear Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      {/* Content Layer for Marketing Text and Form (positioned over background and Navbar) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-white container mx-auto px-4">
        {/* Inner flex container for desktop: Marketing Content (Left/Center) + Form (Right) */}
        {/* Changed md:items-start md:text-left to md:items-center md:text-center for marketing content */}
        <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between w-full">

          {/* Marketing Content (Headings, Subheading, CTA Button) */}
          <div className="flex flex-col items-center text-center md:items-center md:text-center w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            {isMobile ? (
              <>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight animate-fade-in-up font-poppins">
                  {mobileHeroContent.heading}
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl animate-fade-in-up delay-200">
                  {mobileHeroContent.subheading}
                </p>
              </>
            ) : (
              <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                slidesPerView={1}
                allowTouchMove={false}
                className="w-full h-auto"
                onSwiper={(swiper: SwiperCore) => { }}
              >
                {heroSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="flex flex-col items-center justify-center h-full">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight animate-fade-in-up font-poppins">
                        {slide.heading}
                      </h2>
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up delay-200">
                        {slide.subheading}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            {/* CTA Button */}
            <a
              href="/services"
              className="px-8 py-3 bg-primary-blue text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 ease-in-out text-lg md:text-xl animate-fade-in-up delay-400"
            >
              Browse Services
            </a>
          </div>

          {/* HeroForm (Desktop Only) - Replaced Placeholder */}
          <div className="hidden md:flex md:w-1/2 md:pl-8 flex-col items-center justify-center">
            <HeroForm /> {/* Render the actual HeroForm component here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;