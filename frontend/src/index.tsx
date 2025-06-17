// JCC/frontend/src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your main CSS file with Tailwind directives
import App from './App'; // Your main App component
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom'; // NEW: Import BrowserRouter here

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