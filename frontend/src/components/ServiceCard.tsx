// JCC/frontend/src/components/ServiceCard.tsx

import React from 'react';

// Define the interface for the Service data expected from the backend
interface Service {
  id: number;
  name: string;
  short_description: string;
  image: string; // This will be the full URL to the image from Django
  created_at: string; // Optional, from backend but not displayed here
  updated_at: string; // Optional, from backend but not displayed here
}

// Define the props for the ServiceCard component
interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-dark-panel rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 group">
      {/* Service Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={service.image} // Image URL from Django backend
          alt={service.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          loading="lazy" // Lazy load images for performance
        />
        {/* Optional: Overlay on image for text contrast if text is ever overlaid */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-text-light mb-3 font-poppins">
          {service.name}
        </h3>
        <p className="text-text-muted leading-relaxed mb-4">
          {service.short_description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;