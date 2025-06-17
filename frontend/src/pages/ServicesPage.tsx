// JCC/frontend/src/pages/ServicesPage.tsx

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import ServiceCard from '../components/ServiceCard';

interface Service {
  id: number;
  name: string;
  short_description: string;
  image: string;
  created_at: string;
  updated_at: string;
}

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const API_SERVICES_URL = 'http://127.0.0.1:8000/api/services/';

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get<Service[]>(API_SERVICES_URL);
        setServices(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred.');
        }
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <Helmet>
        <title>Jose Car Care - Our Services</title>
        <meta name="description" content="Explore the range of professional car detailing services offered by Jose Car Care, including interior cleaning, exterior washing, waxing, and more in Ernakulam, Kerala. View our comprehensive list of services." />
        <meta name="keywords" content="car detailing services, car wash services, interior cleaning, exterior wash, waxing, polishing, Ernakulam, Kerala, Jose Car Care" />
        <meta property="og:title" content="Jose Car Care - Our Services" />
        <meta property="og:description" content="Explore the range of professional car detailing services offered by Jose Car Care, including interior cleaning, exterior washing, waxing, and more in Ernakulam, Kerala. View our comprehensive list of services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/services" />
        <meta property="og:image" content="http://localhost:3000/images/about-us-hero.webp" />
      </Helmet>

      {/* Section with optimized vertical padding for less blank space */}
      <section id="services-section" className="py-16 md:py-20 bg-dark-background text-white">
        <div className="container mx-auto px-4">
          {/* Reduced mb- for heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-text-light font-poppins drop-shadow-md">
            Our Comprehensive Detailing Services
          </h1>

          {/* Loading, Error, or Services Display */}
          {loading && (
            <div className="flex justify-center items-center h-48">
              <p className="text-xl text-text-muted">Loading services...</p>
            </div>
          )}

          {error && (
            <div className="flex flex-col justify-center items-center h-48 text-red-500">
              <p className="text-xl">Error loading services:</p>
              <p className="text-sm text-center">{error}</p>
              <p className="text-sm mt-2">Please ensure the Django backend server is running and accessible.</p>
            </div>
          )}

          {!loading && !error && services.length === 0 && (
            <div className="flex justify-center items-center h-48">
              <p className="text-xl text-text-muted">No services found. Please add services via Django Admin.</p>
            </div>
          )}

          {!loading && !error && services.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}

          {/* Removed: Call to Action button is no longer needed here */}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;