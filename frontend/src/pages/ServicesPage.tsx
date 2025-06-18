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

  // UPDATED: Use environment variable for API base URL
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000'; // Fallback for local dev
  const API_SERVICES_URL = `${API_BASE_URL}/api/services/`; // Construct full URL

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
        <title>Jos Car Care - Our Comprehensive Car Painting & Detailing Services</title>
        <meta name="description" content="Explore Jos Car Care's full range of professional car services: from meticulous car painting, detailing, polishing, and ceramic coatings to undercoating and PPF. Available across Ernakulam, Udayamperoor, Kerala." />
        <meta name="keywords" content="car painting, car detailing, car wash, polishing, ceramic coating, graphene coating, nano diamond coating, borophene coating, PPF, paint protection film, undercoating, accessories, paint customisation, interior cleaning, exterior wash, vehicle restoration, Ernakulam, Udayamperoor, Kerala, Jos Car Care" />
        <meta property="og:title" content="Jos Car Care - Our Comprehensive Car Painting & Detailing Services" />
        <meta property="og:description" content="Explore Jos Car Care's full range of professional car services: from meticulous car painting, detailing, polishing, and ceramic coatings to undercoating and PPF. Available across Ernakulam, Udayamperoor, Kerala." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joscarcare.com/services" />
        <meta property="og:image" content="https://joscarcare.com/logo.png" />
      </Helmet>

      <section id="services-section" className="py-16 md:py-20 bg-dark-background text-white">
        <div className="container mx-auto px-4">
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
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
