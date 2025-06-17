// JCC/frontend/src/App.tsx

import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Import your actual page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import SuccessPage from './pages/SuccessPage';
import MobileFloatingButtons from './components/MobileFloatingButtons';
import ScrollToTopButton from './components/ScrollToTopButton';

// Define the 404 Not Found Page component
const NotFoundPage = () => (
  <>
    <title>404 - Page Not Found</title>
    <div className="container mx-auto p-4 py-16 text-center text-red-500">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-4 inline-block text-primary-blue hover:text-primary-blue-light transition duration-200"> {/* NEW: hover:text-primary-blue-light */}
        Go to Home
      </Link>
    </div>
  </>
);


function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    // UPDATED: Use bg-dark-background and text-text-light for global consistency
    <div className="flex flex-col min-h-screen bg-dark-background text-text-light">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <MobileFloatingButtons />
      <ScrollToTopButton />

      {/* UPDATED: text-muted for footer text consistency */}
      <footer className="py-4 text-center text-text-muted bg-dark-panel shadow-inner">
        &copy; {new Date().getFullYear()} Jose Car Care. All rights reserved.
      </footer>
    </div>
  );
}

export default App;