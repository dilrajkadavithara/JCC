// JCC/frontend/src/pages/ContactPage.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';

<Helmet>
        <title>Contact Jose Car Care - Mobile Detailing & Car Painting in Ernakulam, Kerala</title> {/* Enhanced title */}
        <meta name="description" content="Get in touch with Jose Car Care for professional mobile car detailing, painting, and protection services in Ernakulam, Udayamperoor, and across Kerala. Find our addresses, phone, email, and operating hours." /> {/* Enhanced description */}
        <meta name="keywords" content="contact Jose Car Care, phone number, email, address, operating hours, mobile car detailing, car painting, vehicle protection, Ernakulam, Udayamperoor, Kerala, India" /> {/* Enhanced keywords */}
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Contact Jose Car Care - Mobile Detailing & Car Painting" />
        <meta property="og:description" content="Get in touch with Jose Car Care for professional mobile car detailing, painting, and protection services in Ernakulam, Udayamperoor, and across Kerala. Find our addresses, phone, email, and operating hours." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://josecarcare.com/contact" /> {/* IMPORTANT: Update this to your actual production domain */}
        <meta property="og:image" content="https://josecarcare.com/logo.png" /> {/* IMPORTANT: Update this to your actual production logo URL */}
      </Helmet>

// SVG Icons (Simplified for direct use in component)
const PhoneIcon: React.FC = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-accent-yellow mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
  </svg>
);

const MailIcon: React.FC = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-accent-yellow mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

const LocationIcon: React.FC = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-accent-yellow mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

const ClockIcon: React.FC = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-accent-yellow mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> {/* FIXED: strokeLineWidth to strokeWidth */}
  </svg>
);

// Social Media Icons - ENHANCED DESIGN
const FacebookIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm.5 16.5h-2v-6h-2v-2h2V8a3 3 0 013-3h3v2h-2c-.55 0-1 .45-1 1v1h3l-.5 2h-2.5v6z"/></svg>
);
const InstagramIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.04c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5.5 1.5c.27 0 .5.23.5.5v1.5a.5.5 0 01-.5.5h-1.5a.5.5 0 01-.5-.5V4.04c0-.27.23-.5.5-.5h1.5zm-3 0h-5c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5h5c2.76 0 5-2.24 5-5v-5c0-2.76-2.24-5-5-5zm-5 2c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5z"/></svg>
);
const WhatsAppIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.43 14.82c-.17-.09-.98-.49-1.13-.55-.15-.06-.27-.09-.39.09-.12.17-.46.55-.56.66-.09.12-.19.13-.37.04s-.78-.28-1.49-.92c-.55-.49-.92-.91-1.03-1.1-.09-.17-.01-.26.06-.33s.15-.17.22-.26c.07-.09.1-.17.15-.28s.06-.21.04-.31c-.02-.09-.09-.23-.09-.33s-.01-.28-.05-.39c-.04-.12-.39-.92-.53-1.3-.14-.34-.28-.29-.39-.29h-.32c-.13 0-.34.05-.53.25-.19.2-.72.7-.72 1.71s.75 1.99.86 2.13c.11.14 1.4 2.1 3.38 2.92.47.2.85.32 1.15.42.5.17.95.14 1.3-.04.34-.18 1.02-.42 1.17-.66s.15-.46.1-.66c-.05-.19-.17-.3-.37-.39l-.09-.04zM12 2.04c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm0 18.5c-4.69 0-8.5-3.81-8.5-8.5s3.81-8.5 8.5-8.5 8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5z"/>
    </svg>
);


const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Jose Car Care - Contact Us</title>
        <meta name="description" content="Get in touch with Jose Car Care for bookings, inquiries, and mobile detailing services in Ernakulam, Kerala. Find our addresses, phone, email, and operating hours." />
        <meta name="keywords" content="contact, booking, inquiry, phone, email, location, Ernakulam, Kerala, Jose Car Care, mobile detailing, addresses, operating hours" />
        <meta property="og:title" content="Jose Car Care - Contact Us" />
        <meta property="og:description" content="Get in touch with Jose Car Care for bookings, inquiries, and mobile detailing services in Ernakulam, Kerala. Find our addresses, phone, email, and operating hours." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/contact" />
        <meta property="og:image" content="http://localhost:3000/logo.png" />
      </Helmet>

      <section id="contact-section" className="py-16 md:py-20 bg-dark-background text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-text-light font-poppins drop-shadow-md">
            Reach Out for Sparkling Results.
          </h1>

          {/* Main Content Grid - Two columns on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Column 1: Direct Contact & Operating Hours */}
            <div className="flex flex-col space-y-8">
              {/* Direct Contact Block (Phone & Email) */}
              <div className="bg-dark-panel p-8 rounded-lg shadow-xl animate-fade-in-up flex-grow">
                <h2 className="text-3xl font-bold mb-6 text-primary-blue font-poppins">Direct Contact</h2>
                <div className="space-y-6">
                  <div className="flex items-center text-text-light text-xl md:text-2xl">
                    <PhoneIcon />
                    <a href="tel:+916238804932" className="hover:underline transition-colors duration-200">+91 62388 04932</a>
                  </div>
                  <div className="flex items-center text-text-light text-xl md:text-2xl">
                    <MailIcon />
                    <a href="mailto:info@josecarcare.com" className="hover:underline transition-colors duration-200">info@josecarcare.com</a>
                  </div>
                </div>
              </div>

              {/* Operating Hours Block */}
              <div className="bg-dark-panel p-8 rounded-lg shadow-xl animate-fade-in-up delay-100 flex-grow">
                <h2 className="text-3xl font-bold mb-6 text-primary-blue font-poppins">Operating Hours</h2>
                <div className="space-y-2">
                    <div className="flex items-center text-text-light text-xl">
                      <ClockIcon />
                      <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    </div>
                    <div className="flex items-center text-text-light text-xl">
                      <ClockIcon />
                      <p>Sunday: Closed</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Column 2: Locations & Pick-up/Drop-off & Social Media */}
            <div className="flex flex-col space-y-8">
              {/* Locations Block */}
              <div className="bg-dark-panel p-8 rounded-lg shadow-xl animate-fade-in-up delay-200 flex-grow">
                <h2 className="text-3xl font-bold mb-6 text-primary-blue font-poppins">Our Locations</h2>
                <div className="space-y-6">
                  {/* Main Office Address */}
                  <div className="flex items-start text-text-light text-lg">
                    <LocationIcon />
                    <p className="flex-grow">
                      <span className="font-semibold">Main Office:</span> Jose Car Care, Kandanad P O, Udayamperoor, Ernakulam-682305
                    </p>
                  </div>
                  {/* Studio & Service Point Address */}
                  <div className="flex items-start text-text-light text-lg">
                    <LocationIcon />
                    <p className="flex-grow">
                      <span className="font-semibold">Studio & Service Point:</span> Jose Car Care, Opp Chrupushpam Studio, Udayamperoor, Ernakulam-682307
                    </p>
                  </div>
                </div>
              </div>

              {/* Pick-up & Drop-off Highlight Block */}
              <div className="bg-primary-blue text-white p-6 rounded-lg text-center text-xl font-semibold shadow-md animate-scale-up-fade-in flex-grow">
                Remember, we offer convenient pick-up & drop-off services across Kerala!
              </div>

              {/* Social Media Block - ENHANCED DESIGN */}
              <div className="bg-dark-panel p-8 rounded-lg shadow-xl animate-fade-in-up delay-300 flex-grow">
                <h2 className="text-3xl font-bold mb-6 text-primary-blue font-poppins text-center">Connect With Us</h2>
                <div className="flex justify-center space-x-8">
                  {/* Facebook Icon with specific brand color background */}
                  <a href="https://facebook.com/josecarcare" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#3b5998] hover:scale-110 transition-transform duration-200 shadow-md">
                    <FacebookIcon />
                  </a>
                  {/* Instagram Icon with gradient background */}
                  <a href="https://instagram.com/josecarcare" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 hover:scale-110 transition-transform duration-200 shadow-md">
                    <InstagramIcon />
                  </a>
                  {/* WhatsApp Icon with specific brand color background */}
                  <a href="https://wa.me/916238804932" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                    className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] hover:scale-110 transition-transform duration-200 shadow-md">
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>

          </div> {/* End of Main Content Grid */}
        </div>
      </section>
    </>
  );
};

export default ContactPage;