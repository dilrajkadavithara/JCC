// JCC/frontend/src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your main CSS file with Tailwind directives
import App from './App'; // Your main App component
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom'; // NEW: Import BrowserRouter here

// ---------------------- START OF NEW CODE TO ADD ----------------------
import axios from 'axios'; // <--- IMPORTANT: Add this import statement

// Function to get CSRF token from cookies
function getCookie(name: string): string | null {
  let cookieValue: string | null = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const csrftoken = getCookie('csrftoken');

// Configure axios to include the CSRF token in headers for non-GET requests
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true; // Essential for sending cookies (like csrftoken) across different origins/ports

// Optionally, set a default base URL for axios if not using environment variables everywhere
// axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000';
// ---------------------- END OF NEW CODE TO ADD ----------------------


// Get the root element from your public/index.html
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the App component inside React.StrictMode, HelmetProvider, AND Router
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router> {/* NEW: Router now wraps the App component */}
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);