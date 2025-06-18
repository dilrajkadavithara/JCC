// JCC/frontend/src/components/Navbar.tsx

import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define navigation links and phone number
  const navLinks = [
    { name: 'Home', path: '#home-section' },
    { name: 'About', path: '#about-section' },
    { name: 'Services', path: '#services-section' },
    { name: 'Contact', path: '#contact-section' },
  ];

  const phoneNumber = '+91 62388 04932'; // Your actual phone number

  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-4" role="navigation"> {/* Added role="navigation" for semantic clarity */}
      <div className="container mx-auto flex items-center justify-between flex-wrap">

        {/* Logo / Site Title */}
        <div className="w-full md:w-auto flex justify-center md:justify-start order-1 md:order-none">
          <Link to="#home-section" className="text-white text-3xl md:text-4xl font-poppins font-extrabold hover:text-primary-blue transition duration-200" aria-label="Jos Car Care - Go to Home"> {/* Added aria-label */}
            Jos Car Care
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden absolute top-4 right-4 z-50 order-2">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-700/50 transition duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"} // Dynamic aria-label
            aria-expanded={isOpen} // Indicates if the controlled element is expanded
            aria-controls="mobile-menu" // Links to the ID of the controlled element
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Phone Number */}
        <div className="w-full md:w-auto text-center order-3 md:order-none flex-grow md:flex-grow-0 flex justify-center items-center mt-4 md:mt-0">
          <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="text-white text-xl md:text-2xl font-semibold hover:text-primary-blue transition duration-200 whitespace-nowrap" aria-label={`Call Jos Car Care: ${phoneNumber}`}> {/* Added aria-label */}
            {phoneNumber}
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-grow md:flex-grow-0 w-full md:w-auto justify-center md:justify-end space-x-8 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white hover:text-primary-blue transition duration-200 whitespace-nowrap"
              aria-label={`Go to ${link.name} section`} // Added aria-label
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Dropdown (Conditionally rendered) */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-gray-700/95 py-4 mt-4 rounded-lg shadow-xl text-center"> {/* Added id for aria-controls */}
          <ul className="flex flex-col items-center space-y-4" role="menu"> {/* Added role="menu" */}
            {navLinks.map((link) => (
              <li key={link.name} role="none"> {/* Added role="none" for list item */}
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-2 text-white hover:bg-gray-600 transition duration-200 text-xl font-medium"
                  role="menuitem" // Added role="menuitem" for navigation item
                  aria-label={`Go to ${link.name} section`} // Added aria-label
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
