// JCC/frontend/src/components/MobileFloatingButtons.tsx

import React, { useState, useEffect } from 'react';

// SVG Icons for Phone and WhatsApp
const CallIcon: React.FC = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const WhatsAppIcon: React.FC = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.04c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm3.5 15.5l-1.42-.87c-.3-.18-.65-.2-.93-.05-.44.23-.92.35-1.42.35-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c0 .2-.02.4-.05.65l-.87 1.42c-.18.3-.2.65-.05.93.23.44.35.92.35 1.42z"/>
  </svg>
);


const MobileFloatingButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '6238804932'; // Your phone number without +91 for direct call/WhatsApp links

  useEffect(() => {
    // Only show these buttons on mobile/small screens (below md breakpoint)
    const handleResize = () => {
      setIsVisible(window.innerWidth < 768); // Tailwind's 'md' breakpoint
    };

    // Set initial visibility
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible) {
    return null; // Don't render anything if not visible
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}`} // WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center"
      >
        <WhatsAppIcon />
      </a>

      {/* Call Button */}
      <a
        href={`tel:+91${phoneNumber}`} // Call link
        aria-label="Call Jose Car Care"
        className="bg-primary-blue hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center"
      >
        <CallIcon />
      </a>
    </div>
  );
};

export default MobileFloatingButtons;